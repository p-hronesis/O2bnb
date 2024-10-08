import prisma from "@/app/libs/prismadb";

import getCurrentUser from "./getCurrentUser";

export default async function getFavoriteListings() {
  const currentUser = await getCurrentUser();
  try {
    if (!currentUser) {
      return [];
    }
    const favorites = await prisma.listing.findMany({
      where: {
        id: { in: [...(currentUser.favoriteIds || [])] },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return favorites;
  } catch (error: any) {
    throw new Error(error);
  }
}
