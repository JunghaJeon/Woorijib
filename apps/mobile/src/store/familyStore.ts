import { create } from 'zustand';

interface FamilyMember {
  id: string;
  userId: string;
  name: string;
  role: 'parent' | 'child' | 'grandparent';
  nickname?: string;
  profileImageUrl?: string;
}

interface Family {
  id: string;
  name: string;
  members: FamilyMember[];
  petId?: string;
  createdAt: string;
}

interface FamilyState {
  currentFamily: Family | null;
  families: Family[];
  
  // Actions
  setCurrentFamily: (family: Family) => void;
  setFamilies: (families: Family[]) => void;
  addFamilyMember: (member: FamilyMember) => void;
  removeFamilyMember: (memberId: string) => void;
  updateFamily: (family: Partial<Family>) => void;
  clearFamily: () => void;
}

export const useFamilyStore = create<FamilyState>((set) => ({
  currentFamily: null,
  families: [],
  
  setCurrentFamily: (family) => set({ currentFamily: family }),
  
  setFamilies: (families) => set({ families }),
  
  addFamilyMember: (member) => set((state) => {
    if (!state.currentFamily) return state;
    return {
      currentFamily: {
        ...state.currentFamily,
        members: [...state.currentFamily.members, member],
      },
    };
  }),
  
  removeFamilyMember: (memberId) => set((state) => {
    if (!state.currentFamily) return state;
    return {
      currentFamily: {
        ...state.currentFamily,
        members: state.currentFamily.members.filter(m => m.id !== memberId),
      },
    };
  }),
  
  updateFamily: (familyUpdate) => set((state) => {
    if (!state.currentFamily) return state;
    return {
      currentFamily: {
        ...state.currentFamily,
        ...familyUpdate,
      },
    };
  }),
  
  clearFamily: () => set({ currentFamily: null, families: [] }),
}));

