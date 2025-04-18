import React from "react";

const TableSimple = () => {
  return (
    <div className="p-4">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg overflow-x-auto">
        <h2
          className="text-start text-lg font-bold m-4"
          style={{ color: "#9f8854", fontFamily: "'Arial', sans-serif" }}
        >
          Sample Posts from Each Cluster
        </h2>
        <table className="min-w-full table-auto border-separate text-sm">
          <thead className="bg-[#0a0a0abd] text-[#9f8854]">
            <tr>
              <th className="p-3 text-left text-lg">Content</th>
              <th className="p-3 text-left text-lg">Likes</th>
              <th className="p-3 text-left text-lg">Comment_count</th>
              <th className="p-3 text-left text-lg">Engagement_rate</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t">swisschoice.eg
                وصلنا لاخر رمضان محتاجين تجديد ؟... جربوا البيض بالسلامي خفيف و لذيذ لأحسن سحور

                #سحور_في_الانجاز
                #سويس_تشويس
                38 w
                See Translation
              </td>
              <td className="p-3 border-t">318.0</td>
              <td className="p-3 border-t text-center">0</td>
              <td className="p-3 border-t">0.3309053069719043</td>
            </tr>
            {/* Row 2 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t">swisschoice.eg
                رحلتنا من فوود افريكا لستات ماركت انتو سبب و جزء كبير في نجاحنا مبسوطين و ممتنين لوجودكم مستنينكم في ايفنتات تانيه كتير  ❤️❤️❤️

                #اختيار_لذيذ
                #في_الانجاز
                52 w
                See Translation
              </td>
              <td className="p-3 border-t">20.0</td>
              <td className="p-3 border-t text-center">0</td>
              <td className="p-3 border-t">0.02081165452653486</td>
            </tr>
            {/* Row 3 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t">swisschoice.eg
                Wake up your taste buds with our premium sausages! Juicy, savory, and bursting with flavor 🌭
                4 w
              </td>
              <td className="p-3 border-t">5.0</td>
              <td className="p-3 border-t text-center">0</td>
              <td className="p-3 border-t">0.005202913631633715</td>
            </tr>
            {/* Row 4 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t">swisschoice.eg
                الناجتس من سويس تشويس
                يحبه الاطفال
                يحبه الكبار
                يحبه اى حد
                ناجتس سويس تشويس بيناسب كل الأذواق…

                قولنا فى الكومنتات بتحبه اد ايه ؟؟
                #سويس_تشويس
                #اختيار_لذيذ_في_الإنجاز
                28 w
              </td>
              <td className="p-3 border-t">752.0</td>
              <td className="p-3 border-t text-center">0</td>
              <td className="p-3 border-t">0.7825182101977107</td>
            </tr>
            {/* Row 5 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t">swisschoice.eg
                السجق لما بيكون من سويس تشويس ، يبقى كده ضمنا طعم مختلف وخلطة مميزة.
                سجق طبيعي 100% يعني سويس تشويس.

                دلوقتي تقدر تجرب السجق بتاعنا من اقرب سوبر ماركت ليك او حتي اونلاين من خلال طلبات
                مستنين رأيكوا

                #سويس_تشويس
                29 w
                See Translation
              </td>
              <td className="p-3 border-t">774.0</td>
              <td className="p-3 border-t text-center">0</td>
              <td className="p-3 border-t">0.8054110301768991</td>
            </tr>
            {/* Row 6 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t">swisschoice.eg
                كلهم سهلين بس السؤال هنا انتي حابه ايه اكتر  ؟
                مفيش اسهل من كده منتجات
                جربيه من أقرب سوبر ماركت

                #اختيار_لذيذ
                #في_الانجاز
                48 w
                See Translation
              </td>
              <td className="p-3 border-t">791.0</td>
              <td className="p-3 border-t text-center">1</td>
              <td className="p-3 border-t">0.8231009365244537</td>
            </tr>
            {/* Row 7 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t">swisschoice.eg
                ورينا شطارتك وطلع أكلاتك المفضله و اكتب اجاباتك في كومنت
                خلينا نشوف مين توأمك في الاختيارات
                �واعمل لايك وشير علشان تكسب

                � #egyswiss #سويسري_اصلي
                61 w
                See Translation
              </td>
              <td className="p-3 border-t">18.0</td>
              <td className="p-3 border-t text-center">15</td>
              <td className="p-3 border-t">0.018730489073881373</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSimple;
