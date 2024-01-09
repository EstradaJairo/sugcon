// import {
//   Navbar,
//   Banner,
//   JoinCommunity,
//   Sugcon,
//   SugconCommunity,
//   Events,
//   Footer,
// } from "@/types";

// const navbarURL = `${process.env.NEXT_PUBLIC_API_URL}/navbar`;
// const bannerURL = `${process.env.NEXT_PUBLIC_API_URL}/banner`;
// const joinCommunityURL = `${process.env.NEXT_PUBLIC_API_URL}/join-community`;
// const sugconURL = `${process.env.NEXT_PUBLIC_API_URL}/sugcon`;
// const sugconCommunityURL = `${process.env.NEXT_PUBLIC_API_URL}/sugcon-community`;
// const eventsURL = `${process.env.NEXT_PUBLIC_API_URL}/events`;
// const footerURL = `${process.env.NEXT_PUBLIC_API_URL}/footer`;

// export const getNavbarDataContent = async (): Promise<Navbar[]> => {
//   const res = await fetch(`${navbarURL}`, {
//     next: { revalidate: 3600 },
//   });
//   const data = await res.json();
//   return data;
// };

// export const getBannerDataContent = async (): Promise<Banner[]> => {
//   const res = await fetch(`${bannerURL}`, {
//     next: { revalidate: 3600 },
//   });
//   const data = await res.json();
//   return data;
// };

// export const getJoinCommunityDataContent = async (): Promise<
//   JoinCommunity[]
// > => {
//   const res = await fetch(`${joinCommunityURL}`, {
//     next: { revalidate: 3600 },
//   });
//   const data = await res.json();
//   return data;
// };

// export const getSugconDataContent = async (): Promise<Sugcon[]> => {
//   const res = await fetch(`${sugconURL}`, {
//     next: { revalidate: 3600 },
//   });
//   const data = await res.json();
//   return data;
// };

// export const getSugconCommunityDataContent = async (): Promise<
//   SugconCommunity[]
// > => {
//   const res = await fetch(`${sugconCommunityURL}`, {
//     next: { revalidate: 3600 },
//   });
//   const data = await res.json();
//   return data;
// };

// export const getEventsDataContent = async (): Promise<Events[]> => {
//   const res = await fetch(`${eventsURL}`, {
//     next: { revalidate: 3600 },
//   });
//   const data = await res.json();
//   return data;
// };

// export const getFooterDataContent = async (): Promise<Footer[]> => {
//   const res = await fetch(`${footerURL}`, {
//     next: { revalidate: 3600 },
//   });
//   const data = await res.json();
//   return data;
// };
