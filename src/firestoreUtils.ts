// src/firestoreUtils.ts
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firestoreClient";

// Function to add a friend
export const addFriend = async (userEmail: string, friendEmail: string) => {
  try {
    // Example: Add a friend request
    await addDoc(collection(db, "friendRequests"), {
      from: userEmail,
      to: friendEmail,
      status: "pending",
    });
  } catch (error) {
    console.error("Error adding friend", error);
  }
};

// Function to get friend requests for a user
export const getFriendRequests = async (userEmail: string) => {
  try {
    const q = query(
      collection(db, "friendRequests"),
      where("to", "==", userEmail),
      where("status", "==", "pending")
    );
    const querySnapshot = await getDocs(q);
    const friendRequests = querySnapshot.docs.map((doc) => doc.data());
    return friendRequests;
  } catch (error) {
    console.error("Error getting friend requests", error);
  }
};
