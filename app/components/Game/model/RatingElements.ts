export interface ElementHandler<T> {
    addElement: (element: T) => void;
    updateElement: (index: number, element: T) => void;
    finish: () => void;
}

export interface RatingElement {
    id: string,
    rating?: number,
    name: string
}