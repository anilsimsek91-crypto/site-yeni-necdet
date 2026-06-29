import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-serif text-4xl text-void sm:text-5xl">
        Bu iz bir yere çıkmıyor.
      </h1>
      <p className="mt-5 max-w-sm text-sm text-void/60">
        Aradığınız sayfa bozkırda kaybolmuş.
      </p>
      <div className="mt-9">
        <Button href="/">Ana sayfaya dön</Button>
      </div>
    </div>
  );
}
