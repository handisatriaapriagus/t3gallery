import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/aab1de05-ac53-40b3-8806-1a05d6e1f1ca-1vu9e.png",
  "https://utfs.io/f/affd17e5-5f43-4bd4-b8b4-1b6e6f911d5e-1ppxj8.png",
  "https://utfs.io/f/c4f4c334-f8be-408e-8537-c4e8fd338d73-1tx3i.png",
  "https://utfs.io/f/d96396f6-ec54-4d6b-8c7e-8fbfb4ecf45d-ecsrbs.png",
];

const mockImages = mockUrls.map((url,index) => ({
  id: index + 1,
  url,
}));


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        {mockImages.map((image) => (
          <div key={image.id} className="mw-1/2 p-4">
            <img src={image.url}  />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
