export interface UserInterface {
    _id: string;
    userId: string;
    published: boolean;
    profileUrl: string;
    nsfw: boolean;
    censored: boolean;
    name: string;
    tagline: string;
    photoUrl: string;
    bannerUrl: string;
    description: string;
    websiteUrl: string;
    githubUrl: string;
    facebookUrl: string;
    twitterUrl: string;
    youtubeUrl: string;
    linkedinUrl: string;
    gabUrl: string;
    mindsUrl: string;
    twitchUrl: string;
    discordUrl: string;
    subscriberGoal: number;
    btcGoal: number;
    ethGoal: number;
    xmrGoal: number;
    dateUpdated: number;
}
