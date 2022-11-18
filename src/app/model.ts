export interface Board {
    id: number | undefined;
    title: string;
    columns: Column[];
}

export interface Column {
    id: number | undefined;
    title: string;
    sortOrder: number;
    cards: Card[];
}

export interface Card {
    id: number | undefined;
    title: string;
    sortOrder: number;
    description?: string;
}

export const DUMMY_BOARDS: Board[] = [
    {
        title: "Personal",
        id: 1,
        columns: [
            {
                title: "Unimportant",
                id: 1,
                sortOrder: 0,
                cards: [
                    {
                        title: "Clean downstairs closet",
                        sortOrder: 0,
                        id: 1,
                    },
                    {
                        title: "Cardboard boxes",
                        sortOrder: 1,
                        description: "boxes in basement and guest room\ntake to recycling",
                        id: 2
                    },
                    {
                        title: "Write thank you notes",
                        sortOrder: 2,
                        description: "wedding guests\ngofundme donors",
                        id: 3
                    }
                ]
            },
            {
                title: "Urgent",
                sortOrder: 1,
                id: 2,
                cards: [
                    {
                        title: "Register dogs",
                        sortOrder: 0,
                        description: "Need to get microchip verification first",
                        id: 4,
                    },
                    {
                        title: "Get truck inspected",
                        sortOrder: 1,
                        id: 5,
                    },
                    {
                        title: "Schedule dogs for grooming",
                        sortOrder: 2,
                        id: 6
                    }
                ]
            },
            {
                title: "Doing",
                sortOrder: 2,
                id: 3,
                cards: [
                    {
                        title: "Read book on golang",
                        sortOrder: 0,
                        id: 7,
                    },
                    {
                        title: "Research graphics cards",
                        sortOrder: 1,
                        id: 8
                    },
                ]
            },
            {
                title: "Done",
                sortOrder: 3,
                id: 4,
                cards: [
                    {
                        title: "Groceries",
                        sortOrder: 0,
                        description: `1.milk\n2.bread\n3.eggs\n4.cereal\n5.tomato paste\n6.bacon`,
                        id: 9,
                    },
                    {
                        title: "Order new chromecast",
                        sortOrder: 1,
                        id: 10,
                    },
                    {
                        title: "Buy batteries",
                        sortOrder: 2,
                        id: 11,
                    },
                    {
                        title: "Venmo Steve for lunch",
                        sortOrder: 3,
                        id: 12,
                    },
                ]
            }
        ]
    },
    {
        title: "Work",
        id: 2,
        columns: [
            {
                title: "Backlog",
                sortOrder: 0,
                id: 5,
                cards: [
                    {
                        title: "Refactor authentication middleware",
                        sortOrder: 0,
                        id: 13
                    },
                    {
                        title: "Submit request for internet reimbursement",
                        sortOrder: 1,
                        description: "Need to get receipts from Xfinity",
                        id: 14
                    },
                ]
            },
            {
                title: "In Progress",
                sortOrder: 1,
                id: 6,
                cards: [
                    {
                        title: "Update wiki",
                        sortOrder: 0,
                        description: "need tutorial and better explanations",
                        id: 15,
                    },
                    {
                        title: "Submit expense report",
                        sortOrder: 1,
                        id: 16
                    },
                ]
            },
            {
                title: "Done",
                sortOrder: 2,
                id: 7,
                cards: [
                    {
                        title: "Review team pull requests",
                        sortOrder: 0,
                        id: 17
                    },
                    {
                        title: "Review resume for new candidate",
                        sortOrder: 1,
                        id: 18
                    },
                    {
                        title: "Follow up with Susan",
                        sortOrder: 2,
                        id: 19
                    },
                    {
                        title: "Follow up with IT",
                        sortOrder: 3,
                        id: 20
                    },
                ]
            }
        ]
    }
]