export interface Board {
    title: string;
    columns: Column[];
}

export interface Column {
    title: string;
    sortOrder: number;
    cards: Card[];
}

export interface Card {
    title: string;
    sortOrder: number;
    description?: string;
}

export const DUMMY_BOARDS: Board[] = [
    {
        title: "Personal",
        columns: [
            {
                title: "Unimportant",
                sortOrder: 0,
                cards: [
                    {
                        title: "Clean downstairs closet",
                        sortOrder: 0,
                    },
                    {
                        title: "Cardboard boxes",
                        sortOrder: 1,
                        description: "boxes in basement and guest room\ntake to recycling"
                    },
                    {
                        title: "Write thank you notes",
                        sortOrder: 2,
                        description: "wedding guests\ngofundme donors"
                    }
                ]
            },
            {
                title: "Urgent",
                sortOrder: 1,
                cards: [
                    {
                        title: "Register dogs",
                        sortOrder: 0,
                        description: "Need to get microchip verification first"
                    },
                    {
                        title: "Get truck inspected",
                        sortOrder: 1,
                    },
                    {
                        title: "Schedule dogs for grooming",
                        sortOrder: 2
                    }
                ]
            },
            {
                title: "Doing",
                sortOrder: 2,
                cards: [
                    {
                        title: "Read book on golang",
                        sortOrder: 0,
                    },
                    {
                        title: "Research graphics cards",
                        sortOrder: 1,
                    },
                ]
            },
            {
                title: "Done",
                sortOrder: 3,
                cards: [
                    {
                        title: "Groceries",
                        sortOrder: 0,
                        description: `1.milk\n2.bread\n3.eggs\n4.cereal\n5.tomato paste\n6.bacon`
                    },
                    {
                        title: "Order new chromecast",
                        sortOrder: 1
                    },
                    {
                        title: "Buy batteries",
                        sortOrder: 2
                    },
                    {
                        title: "Venmo Steve for lunch",
                        sortOrder: 3
                    },
                ]
            }
        ]
    },
    {
        title: "Work",
        columns: [
            {
                title: "Backlog",
                sortOrder: 0,
                cards: [
                    {
                        title: "Refactor authentication middleware",
                        sortOrder: 0,
                    },
                    {
                        title: "Submit request for internet reimbursement",
                        sortOrder: 1,
                        description: "Need to get receipts from Xfinity"
                    },
                ]
            },
            {
                title: "In Progress",
                sortOrder: 1,
                cards: [
                    {
                        title: "Update wiki",
                        sortOrder: 0,
                        description: "need tutorial and better explanations"
                    },
                    {
                        title: "Submit expense report",
                        sortOrder: 1,
                    },
                ]
            },
            {
                title: "Done",
                sortOrder: 2,
                cards: [
                    {
                        title: "Review team pull requests",
                        sortOrder: 0
                    },
                    {
                        title: "Review resume for new candidate",
                        sortOrder: 1
                    },
                    {
                        title: "Follow up with Susan",
                        sortOrder: 2
                    },
                    {
                        title: "Follow up with IT",
                        sortOrder: 3
                    },
                ]
            }
        ]
    }
]