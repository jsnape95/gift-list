import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  deleteDoc,
  doc,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

export function useGiftLists() {
  const { user } = useAuth();
  const [giftLists, setGiftLists] = useState<any[]>([]);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "giftLists"),
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lists = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGiftLists(lists);
    });

    return unsubscribe;
  }, [user]);

  const addGiftList = async (title: string) => {
    if (!user) return;
    await addDoc(collection(db, "giftLists"), {
      userId: user.uid,
      title,
      createdAt: new Date(),
    });
  };

  const deleteGiftList = async (id: string) => {
    await deleteDoc(doc(db, "giftLists", id));
  };

  return { giftLists, addGiftList, deleteGiftList };
}
