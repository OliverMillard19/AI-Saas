import {create} from "zustand"
import {boolean, set} from "zod";

interface useProModalStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useProModal = create<UseProModalStore>((set) => ({
    isOpen: true,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}));

