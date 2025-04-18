import React from "react";

const DetailedPostsTables = () => {
  return (
    <div className="p-4">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <h2
          className="text-start text-lg font-bold m-4"
          style={{ color: "#9f8854", fontFamily: "'Arial', sans-serif" }}
        >
          Detailed Breakdown of Top-Performing Posts
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-separate text-sm">
            <thead className="bg-[#0a0a0abd] text-[#9f8854]">
              <tr>
                <th className="p-3 text-left text-lg">Content</th>
                <th className="p-3 text-left text-lg">Likes</th>
                <th className="p-3 text-left text-lg">Comment_count</th>
                <th className="p-3 text-left text-lg">Engagement_rate</th>
                <th className="p-3 text-left text-lg">Sentiment</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="hover:bg-[#f3f3f3] transition duration-300">
                <td className="p-3 border-t">
                  swisschoice.eg تقدري تعملي سناك لذيذ و سريع جربيه و قوللنا رأيك في الكومنتس
                  #اختيار_لذيذ #في_الانجاز #سهله_سريعه 44 w See Translation
                </td>
                <td className="p-3 border-t">961.0</td>
                <td className="p-3 border-t text-center">2</td>
                <td className="p-3 border-t text-center">1</td>
                <td className="p-3 border-t">Neutral</td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-[#f3f3f3] transition duration-300">
                <td className="p-3 border-t">
                  swisschoice.eg سحورك ميكملش من غير طبق البيض بالبسطرمه بنقدملك بسطرمه بتتبيلتها المميزة
                  #اختيار _لذيذ #سحور _لذيذ_في_الإنجاز 39 w See Translation
                </td>
                <td className="p-3 border-t">803.0</td>
                <td className="p-3 border-t text-center">1</td>
                <td className="p-3 border-t">0.8355879292403746</td>
                <td className="p-3 border-t">Neutral</td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-[#f3f3f3] transition duration-300">
                <td className="p-3 border-t">
                  swisschoice.eg علشان هى لازم تبقى في أي فطار في رمضان و أساسها اللحمه المفرومه swiss choice عملتلك اللحمة المفرومة بتتبيلة السويسرية المميزه المهم هى سمبوسه ولا سمبوسك؟ #اختيار_لذيذ #في_الانجاز #رمضان_كريم 40 w See Translation
                </td>
                <td className="p-3 border-t">801.0</td>
                <td className="p-3 border-t text-center">3</td>
                <td className="p-3 border-t">0.8335067637877211</td>
                <td className="p-3 border-t">Neutral</td>
              </tr>
              {/* Row 4 */}
              <tr className="hover:bg-[#f3f3f3] transition duration-300">
                <td className="p-3 border-t">
                  swisschoice.eg علشان هى لازم تبقى في أي فطار في رمضان و أساسها اللحمه المفرومه swiss choice عملتلك اللحمة المفرومة بتتبيلة السويسرية المميزه المهم هى سمبوسه ولا سمبوسك؟ #اختيار_لذيذ #في_الانجاز #رمضان_كريم 40 w See Translation
                </td>
                <td className="p-3 border-t">801.0</td>
                <td className="p-3 border-t text-center">3</td>
                <td className="p-3 border-t">0.8335067637877211</td>
                <td className="p-3 border-t">Neutral</td>
              </tr>
              {/* Row 5 */}
              <tr className="hover:bg-[#f3f3f3] transition duration-300">
                <td className="p-3 border-t">
                  swisschoice.eg كلهم سهلين بس السؤال هنا انتي حابه ايه اكتر؟ مفيش اسهل من كده منتجات جربيه من أقرب سوبر ماركت #اختيار_لذيذ #في_الانجاز 48 w See Translation
                </td>
                <td className="p-3 border-t">791.0</td>
                <td className="p-3 border-t text-center">1</td>
                <td className="p-3 border-t">0.8231009365244537</td>
                <td className="p-3 border-t">Neutral</td>
              </tr>
              {/* Row 6 */}
              <tr className="hover:bg-[#f3f3f3] transition duration-300">
                <td className="p-3 border-t">
                  swisschoice.eg السجق لما بيكون من سويس تشويس ، يبقى كده ضمنا طعم مختلف وخلطة مميزة. سجق طبيعي 100% يعني سويس تشويس.
                </td>
                <td className="p-3 border-t">774.0</td>
                <td className="p-3 border-t text-center">0</td>
                <td className="p-3 border-t">0.8054110301768991</td>
                <td className="p-3 border-t">Neutral</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailedPostsTables;
