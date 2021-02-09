export interface TrustPilotReview {
    name: string;
    title: string;
    stars: number;
    reviewText: string;
    date: string;
}

export const TrustPilotReviews: TrustPilotReview[] = [
    {
        name: 'Sher',
        stars: 5,
        title: 'A good starting point',
        reviewText:
            "The platform is smth I'm really happy I've come across. I'm a novice crypto trader, especially when it comes to automated trading. So Trality's bot templates and Rule Builder helped me a lot to set up an algorithm to trade for me. Exactly what I've needed.",
        date: 'Dec 11, 2020',
    },
    {
        name: 'Daniel Mulrooney',
        stars: 5,
        title: 'Best professional product for real algorithmic traders',
        reviewText: `So I thought to write a review for any quants and algorithmic traders who were left with nowhere to go after proquant shut down. Trality is a great platform with a lot of potential. The product itself is not the most beautiful but for a young company - they have everything that a real bot builder needs and to be honest it doesn't need to be beautiful, it just needs to work really well and that it does. I'm sure they will continue to work on the look in the future but where this company shines is the product. The functionality and flexibility is unrivalled. This isn't a copy/past bot platform like most.

In-browser python code editor, loads of libraries to pull from, they've recently had an update to the whole platform which added loads of cool new features and order types and on top of that you can contact them at any time and they will get back to you either through email or through the cool Telegram channel where you can chat with others.

Really pleased that I found this after being recommended by a mate and looking forward to seeing what they add in the future!!`,
        date: 'Jan 15, 2021',
    },
    {
        name: 'David Laflamme',
        stars: 5,
        title: 'One interface for creating, back-testing and live-trading',
        reviewText: `What I like about Trality is the trading convenience the platform provides. I mean, it is pretty handy to have everything in one place - I'm creating, back-testing and deploying my bots for trading in one interface via browser. That is a time saver for me.

Particularly I would highlight the in-browser Python editor. Indeed a decent thing. Finally I found a solution which has it developed, so I can have my bots coded now.

BTW, which is actually also important, the exchanges are connected via withdrawal-enabled APIs. This makes me feel safe about my funds. Unless my strategy screws up, heh`,
        date: 'Jan 19, 2021',
    },
    {
        name: 'Alex Belikh',
        stars: 5,
        title: 'Awesome platform',
        reviewText: `Awesome platform! I'm a newbie in algorithmic trading and I expected this to imply a lot of coding. But trality has a simple in-browser tool for bot creation, which is a bailout in case you don't know how to code (like me basically). Really simple and fast app, I've created my first trading bot for just 10 mins...seriously. It wasn't profitable of course =) but anyway, I definitely recommend Trality to everyone who is looking for automatic trading solutions.`,
        date: 'Jan 21, 2021',
    },
];
