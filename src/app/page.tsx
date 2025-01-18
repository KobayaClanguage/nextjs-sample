import Image from 'next/image'

export default function Home() {
  return (
    <div>
      
      <div className="flex items-center my-5 ml-2">
        <Image src="logo_1.png" alt="logo1_img"/>
        <div className="ml-auto">
          <a className="px-10">CONCEPT</a>
          <a className="px-10">MENU</a>
          <a className="px-10">SHOP</a>
          <a className="px-10">ACCESS</a>
        </div>
      </div>
      <div>
        <Image src="mountain.png" alt="mountain" />
        <img src="mountain.png"></img>
      </div>

      <div className="text-center mt-20 font-serif">
      「想像力はあなたをどこにでも連れて行ってくれる」<br/>
      注文を待つ間に広げた、一冊の本の中に見つけた言葉。<br/>
      ゆったり流れる時間の中で、想像をふくらませる楽しさを思い出す。<br/>
      そんな時間を過ごす時、美味しいコーヒーがあると嬉しい。        <br/>
      </div>

      <div className="flex justify-center">
        <button className="bg-red-300 px-10 py-2 rounded-full mt-10 mb-10">CONCEPT</button>
      </div>

      <div className="bg-sky-500/50 pt-8">
        <div className="text-center my-10 font-bold">RECOMMENDED</div>
        
        <table className="table-auto mx-auto mb-10">
          <thead>
            <tr>
              <th className="px-5"><Image src="product.png" alt="product_img"/></th>
              <th className="px-5"><Image src="product.png" alt="product_img"/></th>
              <th className="px-5"><Image src="product.png" alt="product_img"/></th>
              <th className="px-5"><Image src="product.png" alt="product_img"/></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="px-5 items-center">カフェラテ</td>
              <td className="px-5"></td>
              <td className="px-5"></td>
              <td className="px-5"></td>
            </tr>

            <tr>
              <td className="px-5 text-xs">エスプレッソとミルク、この組み<br/>
                合わせに勝るものはなかなか見つ<br/>
                かりません。ホッとしたい時、<br/>
                やっぱりラテが欲しくなる。</td>
              <td className="px-5"></td>
              <td className="px-5"></td>
              <td className="px-5"></td>
            </tr>

            <tr>
              <td className="px-5 items-center">¥４６０</td>
              <td className="px-5"></td>
              <td className="px-5"></td>
              <td className="px-5"></td>
            </tr>

          </tbody>

        </table>

        <div className="bg-black">
          <div className="flex gap-20 justify-center">
            <a className="text-white mt-5">CONCEPT</a>
            <a className="text-white mt-5">MENU</a>
            <a className="text-white mt-5">SHOP</a>
            <a className="text-white mt-5">ACCESS</a>
          </div>

          <div className="mx-auto mt-28 w-1/3 h-20"><Image src="logo_2.png" alt="logo"/></div>

          <div className="text-white text-center mt-16 text-xl">TEL 01-2345-6789</div>
          <div className="text-white text-center text-xs">OPEN Fri-Sun 11:00~16:00</div>
          <div className="text-white text-center mt-52">@Kissa</div>
        
        </div>

      </div>

    </div>
  );
}

