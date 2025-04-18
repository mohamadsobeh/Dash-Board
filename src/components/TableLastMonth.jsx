import React from "react";

const TableLastMonth = () => {
  return (
    <div className="p-4">
      <div className="w-full max-w-full bg-white rounded-2xl shadow-lg ">
        <p
          className="text-start text-lg font-bold m-4"
          style={{ color: "#9f8854", fontFamily: "'Arial', sans-serif" }}
        >
          The table below highlights engagement metrics for the posts published in the last month. It provides insights into likes, comments, and overall engagement rate.
        </p>
        <div className="overflow-x-auto">
        <table className="w-full max-w-full border-separate text-sm">
          <thead className="bg-[#9f8854] text-[#0a0a0abd]">
            <tr>
              <th className="p-3 text-left">Url</th>
              <th className="p-3 text-left">Content</th>
              <th className="p-3 text-left">Likes</th>
              <th className="p-3 text-left">Comments List</th>
              <th className="p-3 text-left">Cleaned Content</th>
              <th className="p-3 text-left">Sentiment</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Comment Sentiments</th>
              <th className="p-3 text-left">Estimated Date</th>
              <th className="p-3 text-left">Month</th>
              <th className="p-3 text-left">Engagement Rate</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t overflow-hidden text-ellipsis whitespace-nowrap">
                <span
                  className="tooltip relative cursor-pointer"
                  style={{
                    display: "inline-block",
                    maxWidth: "55px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title="https://www.instagram.com/swisschoice.eg/reel/DCtm_AaO7jH/"
                >
                  https://www.instagram.com/swisschoice.eg/reel/DCtm_AaO7jH/
                </span>
              </td>
              <td className="p-3 border-t">swisschoice.eg
                Wake up your taste buds with our premium sausages! Juicy, savory, and bursting with flavor 🌭
                4 w
              </td>
              <td className="p-3 border-t">5.0</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">swisschoiceeg
                Wake up your taste buds with our premium sausages Juicy savory and bursting with flavor
                4 w
              </td>
              <td className="p-3 border-t">Neutral</td>
              <td className="p-3 border-t">None</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">2024-12-07 06:17:36.874789</td>
              <td className="p-3 border-t">2024-12</td>
              <td className="p-3 border-t">0.005202913631633715</td>
            </tr>
            {/* Row 2 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t overflow-hidden text-ellipsis whitespace-nowrap">
                <span
                  className="tooltip relative cursor-pointer"
                  style={{
                    display: "inline-block",
                    maxWidth: "55px", 
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title="https://www.instagram.com/swisschoice.eg/reel/DC1RtTTuHa-/"
                >
                  https://www.instagram.com/swisschoice.eg/reel/DC1RtTTuHa-/
                </span>
              </td>
              <td className="p-3 border-t">swisschoice.eg
                Which emoji is your reaction When you see our delicious kofta?
                Edited · 4 w
              </td>
              <td className="p-3 border-t">3.0</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">swisschoiceeg
                Which emoji is your reaction When you see our delicious kofta
                Edited  4 w
              </td>
              <td className="p-3 border-t">Positive</td>
              <td className="p-3 border-t">None</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">2024-12-07 06:17:36.875036</td>
              <td className="p-3 border-t">2024-12</td>
              <td className="p-3 border-t">0.003121748178980229</td>
            </tr>
            {/* Row 3 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t overflow-hidden text-ellipsis whitespace-nowrap">
                <span
                  className="tooltip relative cursor-pointer"
                  style={{
                    display: "inline-block",
                    maxWidth: "55px", 
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title="https://www.instagram.com/swisschoice.eg/reel/DCwUvhDuffM-/"
                >
                  https://www.instagram.com/swisschoice.eg/reel/DCwUvhDuffM/
                </span>
              </td>

              <td className="p-3 border-t">swisschoice.eg
                Whatever your choice, it’s always the best with Swiss Choice! 🌟 Quality you can trust, flavors you’ll love. #SwissChoice #QualityMatters
                Edited · 4 w
              </td>
              <td className="p-3 border-t">3.0</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">swisschoiceeg
                Whatever your choice its always the best with Swiss Choice  Quality you can trust flavors youll love
                Edited  4 w
              </td>
              <td className="p-3 border-t">Positive</td>
              <td className="p-3 border-t">None</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">2024-12-07 06:17:36.875246</td>
              <td className="p-3 border-t">2024-12</td>
              <td className="p-3 border-t">0.003121748178980229</td>
            </tr>
            {/* Row 4 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t overflow-hidden text-ellipsis whitespace-nowrap">
                <span
                  className="tooltip relative cursor-pointer"
                  style={{
                    display: "inline-block",
                    maxWidth: "55px", 
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title="https://www.instagram.com/swisschoice.eg/p/DCrMDmgs0KM/"
                >
                  https://www.instagram.com/swisschoice.eg/p/DCrMDmgs0KM/
                </span>
              </td>
              <td className="p-3 border-t">swisschoice.eg
                Unlocking flavors, one letter at a time! What’s the first word you see?
                4 w

              </td>
              <td className="p-3 border-t">3.0</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">swisschoiceeg
                Unlocking flavors one letter at a time Whats the first word you see
                4 w


              </td>
              <td className="p-3 border-t">Positive</td>
              <td className="p-3 border-t">None</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">2024-12-07 06:17:36.875532</td>
              <td className="p-3 border-t">2024-12</td>
              <td className="p-3 border-t">0.003121748178980229</td>
            </tr>
            {/* Row 5 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t overflow-hidden text-ellipsis whitespace-nowrap">
                <span
                  className="tooltip relative cursor-pointer"
                  style={{
                    display: "inline-block",
                    maxWidth: "55px", 
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title="https://www.instagram.com/swisschoice.eg/reel/DDrtqZTMjgt/"
                >
                  https://www.instagram.com/swisschoice.eg/reel/DDrtqZTMjgt/
                </span>
              </td>
              <td className="p-3 border-t">swisschoice.eg
                Indulge in the authentic taste of Swiss Choice Kofta – a perfect blend of spices and premium quality meat, crafted for a flavorful dining experience.
                1 w




              </td>
              <td className="p-3 border-t">5.0</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">swisschoiceeg
                Indulge in the authentic taste of Swiss Choice Kofta  a perfect blend of spices and premium quality meat crafted for a flavorful dining experience
                1 w
              </td>
              <td className="p-3 border-t">Positive</td>
              <td className="p-3 border-t">None</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">2024-12-28 06:17:36.875579</td>
              <td className="p-3 border-t">2024-12</td>
              <td className="p-3 border-t">0.005202913631633715</td>
            </tr>
            {/* Row 6 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t overflow-hidden text-ellipsis whitespace-nowrap">
                <span
                  className="tooltip relative cursor-pointer"
                  style={{
                    display: "inline-block",
                    maxWidth: "55px", 
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title="https://www.instagram.com/swisschoice.eg/reel/DC6csc0OJnj/"
                >
                  https://www.instagram.com/swisschoice.eg/reel/DC6csc0OJnj/
                </span>
              </td>

              <td className="p-3 border-t">swisschoice.eg
                Whipping up comfort in a bowl with Swisschoice minced meat and pasta! 🍝🍽️ The perfect combo of hearty and delicious. #Swisschoice #PastaPerfection #HeartyEats
                3 w
              </td>
              <td className="p-3 border-t">3.0</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">swisschoiceeg
                Whipping up comfort in a bowl with Swisschoice minced meat and pasta  The perfect combo of hearty and delicious
                3 w
              </td>
              <td className="p-3 border-t">Positive</td>
              <td className="p-3 border-t">None</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">2024-12-14 06:17:36.875765</td>
              <td className="p-3 border-t">2024-12</td>
              <td className="p-3 border-t">0.003121748178980229</td>
            </tr>
            {/* Row 7 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t overflow-hidden text-ellipsis whitespace-nowrap">
                <span
                  className="tooltip relative cursor-pointer"
                  style={{
                    display: "inline-block",
                    maxWidth: "55px", 
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title="https://www.instagram.com/swisschoice.eg/reel/DCl1VF7OksL/"
                >
                  https://www.instagram.com/swisschoice.eg/reel/DCl1VF7OksL/
                </span>
              </td>

              <td className="p-3 border-t">swisschoice.eg
                Start your day with the rich, smoky flavor of Swiss Choice Smoked Turkey
                4 w
              </td>
              <td className="p-3 border-t">6.0</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">swisschoiceeg
                Start your day with the rich smoky flavor of Swiss Choice Smoked Turkey
                4 w
              </td>
              <td className="p-3 border-t">Positive</td>
              <td className="p-3 border-t">None</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">2024-12-07 06:17:36.876278</td>
              <td className="p-3 border-t">2024-12</td>
              <td className="p-3 border-t">0.006243496357960458</td>
            </tr>
            {/* Row 8 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t overflow-hidden text-ellipsis whitespace-nowrap">
                <span
                  className="tooltip relative cursor-pointer"
                  style={{
                    display: "inline-block",
                    maxWidth: "55px", 
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title="https://www.instagram.com/swisschoice.eg/reel/DDCK_ruuHe4/"
                >
                  https://www.instagram.com/swisschoice.eg/reel/DDCK_ruuHe4/
                </span>
              </td>

              <td className="p-3 border-t">swisschoice.eg
                Crispy on the outside, tender on the inside our chicken strips are the perfect blend of flavor and crunch. Enjoy a delicious snack or meal that satisfies your cravings!
                3 w
              </td>
              <td className="p-3 border-t">5.0</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">swisschoiceeg
                Crispy on the outside tender on the inside our chicken strips are the perfect blend of flavor and crunch Enjoy a delicious snack or meal that satisfies your cravings
                3 w
              </td>
              <td className="p-3 border-t">Positive</td>
              <td className="p-3 border-t">None</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">2024-12-14 06:17:36.876612</td>
              <td className="p-3 border-t">2024-12</td>
              <td className="p-3 border-t">0.005202913631633715</td>
            </tr>
            {/* Row 9 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t overflow-hidden text-ellipsis whitespace-nowrap">
                <span
                  className="tooltip relative cursor-pointer"
                  style={{
                    display: "inline-block",
                    maxWidth: "55px", 
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title="https://www.instagram.com/swisschoice.eg/reel/DConx42sg6J/"
                >
                  https://www.instagram.com/swisschoice.eg/reel/DConx42sg6J/
                </span>
              </td>

              <td className="p-3 border-t">swisschoice.eg
                Experience the thrill with spicy pane from #SwissChoice! Bold flavor that turns up the heat in every bite. 🌶️🔥 #TheStrongerChoice”
                4 w
              </td>
              <td className="p-3 border-t">5.0</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">swisschoiceeg
                Experience the thrill with spicy pane from  Bold flavor that turns up the heat in every bite
                4 w
              </td>
              <td className="p-3 border-t">Positive</td>
              <td className="p-3 border-t">None</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">2024-12-07 06:17:36.876884</td>
              <td className="p-3 border-t">2024-12</td>
              <td className="p-3 border-t">0.005202913631633715</td>
            </tr>
            {/* Row 10 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t overflow-hidden text-ellipsis whitespace-nowrap">
                <span
                  className="tooltip relative cursor-pointer"
                  style={{
                    display: "inline-block",
                    maxWidth: "55px", 
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title="https://www.instagram.com/swisschoice.eg/p/DDUg17YskSO/"
                >
                  https://www.instagram.com/swisschoice.eg/p/DDUg17YskSO/
                </span>
              </td>

              <td className="p-3 border-t">swisschoice.eg
                Can you guess who am I from these keywords? 🤔✨ Let’s see who can solve the riddle!
                2 w
              </td>
              <td className="p-3 border-t">10.0</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">swisschoiceeg
                Can you guess who am I from these keywords  Lets see who can solve the riddle
                2 w
              </td>
              <td className="p-3 border-t">Neutral</td>
              <td className="p-3 border-t">None</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">2024-12-21 06:17:36.877004</td>
              <td className="p-3 border-t">2024-12</td>
              <td className="p-3 border-t">0.01040582726326743</td>
            </tr>
            {/* Row 11 */}
            <tr className="hover:bg-[#f3f3f3] transition duration-300">
              <td className="p-3 border-t overflow-hidden text-ellipsis whitespace-nowrap">
                <span
                  className="tooltip relative cursor-pointer"
                  style={{
                    display: "inline-block",
                    maxWidth: "55px", 
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title="https://www.instagram.com/swisschoice.eg/p/DDmZaHzOd15/"
                >
                  https://www.instagram.com/swisschoice.eg/p/DDmZaHzOd15/
                </span>
              </td>
              <td className="p-3 border-t">swisschoice.eg
                To have a premium day, start with a premium breakfast!
                1 w
              </td>
              <td className="p-3 border-t">4.0</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">swisschoiceeg
                To have a premium day start with a premium breakfast
                1 w
              </td>
              <td className="p-3 border-t">Neutral</td>
              <td className="p-3 border-t">None</td>
              <td className="p-3 border-t text-center">[]</td>
              <td className="p-3 border-t">2024-12-28 06:17:36.877362</td>
              <td className="p-3 border-t">2024-12</td>
              <td className="p-3 border-t">0.004162330905306972</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default TableLastMonth;
