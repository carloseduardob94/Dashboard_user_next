"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/firebase/client";

export interface User {
  id?: string;
  name: string;
  age: number;
  gender: string;
  date: string;
  time: string;
  duration: string;
  userType: string;
  status: string;
}

export function useUsersFirebase() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const usersData: User[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as User[];
      setUsers(usersData);
    });

    return () => unsubscribe();
  }, []);

  const addUser = async (user: Omit<User, "id">) => {
    await addDoc(collection(db, "users"), user);
  };

  const updateUser = async (id: string, user: Partial<User>) => {
    const userRef = doc(db, "users", id);
    await updateDoc(userRef, user);
  };

  const deleteUser = async (id: string) => {
    const userRef = doc(db, "users", id);
    await deleteDoc(userRef);
  };

  return {
    users,
    addUser,
    updateUser,
    deleteUser,
  };
}
