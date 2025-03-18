const Latest = () => {
  return (
    <div>
      <div className="grid grid-cols-3 place-items-center gap-2 mt-2">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((op) => (
          <div className="w-100 h-100 rounded-md overflow-hidden" key={op}>
            <img src="/images/liveGameImg1.png" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
