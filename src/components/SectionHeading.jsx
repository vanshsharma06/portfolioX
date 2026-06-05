function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="mt-5 text-balance text-3xl font-black text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy ? <p className="muted-copy mx-auto mt-4 max-w-2xl">{copy}</p> : null}
    </div>
  );
}

export default SectionHeading;
