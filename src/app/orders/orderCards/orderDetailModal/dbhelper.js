import { db } from "@/Components/Firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { updateProductStatus } from "@/Components/Firebase/DataManager/DataOperations";

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
