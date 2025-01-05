import {create} from 'zustand';

type Generator = {
  id: number;
  name: string;
  kva: number;
};

type GeneratorState = {
  generators: Generator[];
  nextId: number;
  addGenerator: () => void;
  deleteGenerator: (id: number) => void;
  updateKVA: (id: number, kva: number) => void;
};

const useGeneratorStore = create<GeneratorState>((set): GeneratorState => ({
  generators: [],
  nextId: 1,
  addGenerator: (): void =>
    set((state) => ({
      generators: [
        ...state.generators,
        { id: state.nextId, name: `Generator ${state.nextId}`, kva: 0 },
      ],
      nextId: state.nextId + 1,
    })),
  deleteGenerator: (id: number): void =>
    set((state) => ({
      generators: state.generators.filter((generator) => generator.id !== id),
    })),
  updateKVA: (id: number, kva: number): void =>
    set((state) => ({
      generators: state.generators.map((generator) =>
        generator.id === id ? { ...generator, kva } : generator
      ),
    })),
}));

export default useGeneratorStore;
