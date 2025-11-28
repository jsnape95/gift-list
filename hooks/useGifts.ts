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
  Timestamp,
} from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";

type Gift = {
  id: string;
  listId: string;
  userId: string;
  title: string;
  description?: string;
  url?: string;
  createdAt?: Timestamp;
};

export function useGifts(listId: string) {
  const { user, loading } = useAuth();
  const [gifts, setGifts] = useState<Gift[]>([]);

  useEffect(() => {
    if (loading || !user || !listId) return;

    const q = query(
      collection(db, "gifts"),
      where("listId", "==", listId),
      where("userId", "==", user.uid)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const results = snapshot.docs
          .map((docItem) => ({
            id: docItem.id,
            ...(docItem.data() as Omit<Gift, "id">),
          }))
          .sort((a, b) => {
            const aTime = a.createdAt?.toMillis?.() ?? 0;
            const bTime = b.createdAt?.toMillis?.() ?? 0;
            return bTime - aTime;
          });
        setGifts(results);
      },
      (error) => {
        console.error("Failed to load gifts", error);
      }
    );

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
