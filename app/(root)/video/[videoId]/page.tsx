import VideoDetailHeader from "@/app/components/VideoDetailHeader";
import VideoPlayer from "@/app/components/VideoPlayer";
import {
  getTranscript,
  getVideoByAnyId,
  getVideoById,
  getVideoByIdDB,
} from "@/lib/actions/video";

import { redirect } from "next/navigation";

const page = async ({ params }: Params) => {
  const { videoId } = await params;
  const { user, video } = await getVideoByAnyId(videoId);

  if (!video) redirect("/404");

  const transcript = await getTranscript(videoId);
  return (
    <main className="wrapper page">
      <VideoDetailHeader
        title={video.title}
        createdAt={video.createdAt}
        userImg={user?.image}
        username={user?.name}
        videoId={video.videoId}
        ownerId={video.userId}
        visibility={video.visibility}
        thumbnailUrl={video.thumbnailUrl}
        id={video.id}
      />
      <section className="video-details">
        <div className="content">
          <VideoPlayer videoId={video.videoId} />
        </div>
      </section>
    </main>
  );
};

export default page;
