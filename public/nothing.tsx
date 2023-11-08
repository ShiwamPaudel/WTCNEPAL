
{sub === 0 && (
    <div className="absolute top-[0px] left-[100%]    w-[91%] h-[126px] z-40 space-y-[10px]">
      <div className="bg-white border-l-[0.5px] w-full border-l-[white]  border-t-[4px] border-t-[black]   absolute top-[10px] h-[100%]  ">
        {subCategory?.map((item: any, index: any) => (
          <>
            {/* {console.log(item)} */}
            <li
              onMouseEnter={() =>
                handleSubmenu2(index)
              }
              onMouseLeave={handleSubmenuHide2}
              className="text-[15px] relative  capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer"
            >
              <Link href="/about">
                {item?.attributes?.title}
              </Link>
            </li>

            {sub2 === index && (
              <div className="absolute  left-[100%]    w-[54%] h-[126px] z-40 space-y-[10px]">
                <div className=" mt-[-60px]    absolute top-[0px] h-[100%] w-full ">
                  {item.attributes.brand_name && (
                    <>
                      <li className="text-[15px] whitespace-pre w-full border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                        <Link
                          href={`/brand-product/${item.attributes.brand_name}`}
                        >
                          {item.attributes.brand_name}
                        </Link>
                      </li>
                      {item?.attributes
                        ?.brand_name2 && (
                        <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                          <Link
                            href={`/brand-product/${item?.attributes?.brand_name2}`}
                          >
                            {
                              item?.attributes
                                ?.brand_name2
                            }
                          </Link>
                        </li>
                      )}
                    </>
                  )}

                  {/* {item.attributes.Brand_name==="BioSystems" && (
              <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                {item.sub2}
              </li>
            )} */}
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  )}

  {sub === 1 && (
    <div className="absolute top-[0px] left-[100%]    w-[91%] h-[126px] z-40 space-y-[10px]">
      <div className=" border-l-[0.5px] border-l-[white]  border-t-[4px] border-t-[black]   absolute top-[10px] h-[100%] w-full ">
        {secondCategory?.map(
          (item: any, index: number) => (
            <>
              <li
                onMouseEnter={() =>
                  handleList2(index)
                }
                className="text-[15px] relative  capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer"
              >
                <Link href="/about">
                  {item?.attributes?.title}
                </Link>
              </li>
              {list2 === index && (
                <div className="absolute  left-[100%]    w-[35%] h-[126px] z-40 space-y-[10px]">
                  <div className=" mt-[-60px]    absolute top-[0px] h-[100%] w-full ">
                    {item?.attributes?.brand_name && (
                      <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                        <Link
                          href={`/brand-product/${item?.attributes?.brand_name}`}
                        >
                          {
                            item?.attributes
                              ?.brand_name
                          }
                        </Link>
                      </li>
                    )}
                  </div>
                </div>
              )}
            </>
          )
        )}
      </div>
    </div>
  )}
  {sub === 2 && (
    <div className="absolute top-[95px] left-[100%]    w-[91%] h-[126px] z-40 space-y-[10px]">
      <div
        onMouseEnter={handleSubmenu2}
        onMouseLeave={handleSubmenuHide2}
        className=" border-l-[0.5px] border-l-[white]  border-t-[4px] border-t-[black]   absolute top-[10px] h-[100%] w-full "
      >
        {thirdCategory?.map(
          (item: any, index: number) => (
            <>
              <li className="text-[15px] relative  capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                <Link
                  href={`/brand-product/${item?.attributes?.title}`}
                >
                  {item?.attributes?.title}
                </Link>
              </li>
              {/* {sub2 && (
        <div className="absolute top-[5px] left-[100%]    w-[199px] h-[126px] z-40 space-y-[10px]">
          <div className="  border-t-[4px] border-t-[black]   absolute top-[0px] h-[100%] w-full ">
            <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
              <Link href="/about">BioSystems</Link>
            </li>
          </div>
        </div>
      )} */}
            </>
          )
        )}
      </div>
    </div>
  )}

  {sub === 3 && (
    <div className="absolute top-[100px] left-[100%]    w-[91%] h-[126px] z-40 space-y-[10px]">
      <div className=" border-l-[0.5px]   border-t-[4px] border-t-[black]   absolute top-[10px] h-[100%] w-full ">
        {fourthCategory?.map(
          (item: any, index: number) => (
            <>
              <li
                onMouseEnter={() =>
                  handlelist4(index)
                }
                className="text-[15px] relative  capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer"
              >
                <Link href="/about">
                  {item?.attributes?.title}
                </Link>
              </li>
              {list4 === index && (
                <div className="absolute  left-[100%]    w-[55%] h-[126px] z-40 space-y-[10px]">
                  <div className=" mt-[-60px] border-t-[4px] border-t-[black]   absolute top-[0px] h-[100%] w-full ">
                    <li className="text-[15px] border-b-[0.5px] capitalize border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#23a8cd] text-white py-[10px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
                      <Link
                        href={`/brand-product/${item?.attributes?.brand_name}`}
                      >
                        {item?.attributes?.brand_name}
                      </Link>
                    </li>
                  </div>
                </div>
              )}
            </>
          )
        )}
      </div>
    </div>
  )}