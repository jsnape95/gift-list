import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
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
import { useAuth } from "@/context/AuthContext";

export function useGifts(listId: string) {
  const { user, loading } = useAuth();
  const [gifts, setGifts] = useState<any[]>([]);

  useEffect(() => {
    if (loading || !user || !listId) return;

    const q = query(
      collection(db, "gifts"),
      where("listId", "==", listId),
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGifts(results);
    });

    return unsubscribe;
  }, [user, loading, listId]);

  const addGift = async ({
    title,
    description,
    url,
  }: {
    title: string;
    description?: string;
    url?: string;
  }) => {
    if (!user) return;
    await addDoc(collection(db, "gifts"), {
      userId: user.uid,
      listId,
      title,
      description,
      url,
      createdAt: new Date(),
    });
  };

  const deleteGift = async (giftId: string) => {
    await deleteDoc(doc(db, "gifts", giftId));
  };

  return { gifts, addGift, deleteGift };
}
