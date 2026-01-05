"use client";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ProductType } from "@/lib/supabase/database.types";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [products, setProducts] = useState<ProductType[]>([]);
  const supabase = createClient();

  const loadData = async () => {
    try {
      const { data: productsData, error } = await supabase
        .from("products")
        .select();
      if (error) throw new Error();
      setProducts(productsData); // 상태 변수에 데이터를 설정합니다.
    } catch (err) {
      console.log("데이터를 불러오지 못했습니다", err);
      return null;
    }
  };

  const onClickItem = (id: string) => {
    router.push(`products/${id}`);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <main className="min-h-screen p-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-start gap-4">
          {products?.map((item) => {
            const imageUrl = item.images?.[0];
            const isValidUrl =
              imageUrl &&
              (imageUrl.startsWith("http://") ||
                imageUrl.startsWith("https://") ||
                imageUrl.startsWith("/"));
            return (
              <Card
                key={item.id}
                className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)] p-4 cursor-pointer"
                onClick={() => onClickItem(item.id)}
              >
                {isValidUrl ? (
                  <div className="relative w-full h-[200px] overflow-hidden mb-3">
                    <Image
                      src={imageUrl}
                      alt={item.product_name || "상품 이미지"}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center pb-3">
                    <p className="text-gray-500">이미지 준비중</p>
                  </div>
                )}
                <CardTitle className="text-lg">{item.product_name}</CardTitle>
                <CardDescription>{item.category}</CardDescription>
                <div>
                  <p className="font-bold">{item.price?.toLocaleString()}원</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}
