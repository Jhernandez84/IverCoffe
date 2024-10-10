"use client";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/Components/Firebase/firebase";

// Esta consulta obtiene los valores guardados
export const GetFireBaseData = async (DBEvento) => {
  try {
    if (!DBEvento || typeof DBEvento !== "string") {
      throw new Error("Invalid DBEvento parameter");
    }

    const collectionRef = db.collection(`${DBEvento}`);
    const querySnapshot = await collectionRef.limit(100).get(); // Limit to 100 records

    if (querySnapshot.empty) {
      throw new Error(`Sin registros para el evento: ${DBEvento}`);
    }

    const records = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    //   .filter((record) => record.EventoEstado !== "eliminado");

    // records.sort((a, b) => a.Rut.localeCompare(b.Rut));

    return records;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
};

export const GetFireBaseDataAll = async (DBEvento) => {
  try {
    if (!DBEvento || typeof DBEvento !== "string") {
      throw new Error("Invalid DBEvento parameter");
    }

    const collectionRef = db.collection(DBEvento);
    const querySnapshot = await collectionRef.limit(100).get(); // Limit to 100 records

    if (querySnapshot.empty) {
      throw new Error(`No records found for the event: ${DBEvento}`);
    }

    const records = querySnapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .filter((record) => record.EventoEstado !== "eliminado");

    // records.sort((a, b) => a.orderFullDate.localeCompare(b.Rut));

    return records;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
};

export const GetFireBaseDataCount = async (DBEvento) => {
  try {
    if (!DBEvento || typeof DBEvento !== "string") {
      throw new Error("Invalid DBEvento parameter");
    }

    const collectionRef = db.collection(`${DBEvento}`);
    const querySnapshot = await collectionRef.get(); // Fetch metadata about documents

    // Get the count of documents in the collection from the metadata
    const count = querySnapshot.size;

    return count;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
};

export const checkValueExists = async (collectionName, fieldName, value) => {
  try {
    if (
      !collectionName ||
      typeof collectionName !== "string" ||
      !fieldName ||
      typeof fieldName !== "string"
    ) {
      throw new Error("Invalid collectionName or fieldName parameter");
    }

    const collectionRef = db.collection(collectionName);
    const querySnapshot = await collectionRef
      .where(fieldName, "==", value)
      .get();

    if (!querySnapshot.empty) {
      const docId = querySnapshot.docs[0].id;
      return { exists: true, docId: docId };
    } else {
      return { exists: false, docId: null };
    }
  } catch (error) {
    console.error("Error checking value existence:", error);
    throw error;
  }
};

export const GetStoredData = async (collectionName, docId) => {
  try {
    if (!collectionName || typeof collectionName !== "string") {
      throw new Error("Invalid collectionName parameter");
    }

    if (!docId || typeof docId !== "string") {
      throw new Error("Invalid docId parameter");
    }

    const docRef = db.collection(collectionName).doc(docId);
    const docSnapshot = await docRef.get();

    if (!docSnapshot.exists) {
      throw new Error(`No record found for the provided document ID: ${docId}`);
    }

    const data = {
      id: docSnapshot.id,
      ...docSnapshot.data(),
    };

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const GetMainOrdersData = async (collectionName, docId) => {
  try {
    if (!collectionName || typeof collectionName !== "string") {
      throw new Error("Invalid collectionName parameter");
    }
    if (!docId || typeof docId !== "string") {
      throw new Error("Invalid docId parameter");
    }
    const docRef = doc(db, collectionName, docId);
    const docSnapshot = await docRef.get();
    if (!docSnapshot.exists) {
      throw new Error(`No record found for the provided document ID: ${docId}`);
    }
    const data = {
      id: docSnapshot.id,
      ...docSnapshot.data(),
    };

    const result = {
      orderId: data.id,
      orderCustomerName: data.orderCustomerName,
      orderFullDate: data.orderFullDate,
    };

    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const GetStoredDataDetails = async (collectionName, docId) => {
  try {
    if (!collectionName || typeof collectionName !== "string") {
      throw new Error("Invalid collectionName parameter");
    }

    if (!docId || typeof docId !== "string") {
      throw new Error("Invalid docId parameter");
    }

    // Reference to the specific document
    const docRef = doc(db, collectionName, docId);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      throw new Error(`No record found for the provided document ID: ${docId}`);
    }

    const data = {
      id: docSnapshot.id,
      ...docSnapshot.data(),
    };

    // Extract the orderDetails field if it exists
    const { orderDetails } = data;

    return orderDetails;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const CreateRecord = async (collectionName, newData) => {
  try {
    const docRef = db.collection(collectionName).doc();
    await docRef.set(newData);
    console.log("Document created successfully.");
    return docRef.id; // Return the ID of the newly created document
  } catch (error) {
    console.error("Error creating record:", error);
    throw error;
  }
};

export const UpdateRecord = async (
  collectionName,
  id,
  newData,
  userWhoUpdates
) => {
  try {
    const docRef = db.collection(collectionName).doc(id);
    const doc = await docRef.get();

    if (doc.exists) {
      // Document exists, update its data
      newData.LastUpdateBy = userWhoUpdates;
      newData.LastUpdatetimeStamp = new Date();

      await docRef.update(newData);
      console.log(`Document with ID ${id} updated successfully.`);
    } else {
      throw new Error(`Document with ID ${id} does not exist.`);
    }
  } catch (error) {
    console.error("Error updating record:", error);
    throw error;
  }
};

export const DeleteRecord = async (collectionName, id) => {
  try {
    const docRef = db.collection(collectionName).doc(id);
    const doc = await docRef.get();

    if (doc.exists) {
      // Document exists, delete it
      await docRef.delete();
      console.log(`Document with ID ${id} deleted successfully.`);
    } else {
      throw new Error(`Document with ID ${id} does not exist.`);
    }
  } catch (error) {
    console.error("Error deleting record:", error);
    throw error;
  }
};

export const updateProductStatus = async (
  collectionName,
  orderId,
  productIndex,
  newStatus
  // userWhoUpdates
) => {
  try {
    // Reference to the specific document
    const orderRef = doc(db, collectionName, orderId);
    const orderSnap = await getDoc(orderRef);

    if (orderSnap.exists()) {
      // Get the current orderDetails array
      const orderDetails = orderSnap.data().orderDetails;

      // Check if productIndex is valid
      if (productIndex >= 0 && productIndex < orderDetails.length) {
        // Update the Product_Status for the specified product index
        orderDetails[productIndex].Product_Status = newStatus;

        // Update the document with the new orderDetails array and update metadata
        const newData = {
          orderDetails: orderDetails,
          // LastUpdateBy: userWhoUpdates,
          // LastUpdatetimeStamp: new Date(),
        };

        await updateDoc(orderRef, newData);
        console.log("Product status updated successfully!");
      } else {
        throw new Error(`Invalid product index: ${productIndex}`);
      }
    } else {
      throw new Error(`Document with ID ${orderId} does not exist.`);
    }
  } catch (error) {
    console.error("Error updating record:", error);
    throw error;
  }
};