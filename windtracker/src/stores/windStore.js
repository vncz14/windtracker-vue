import { defineStore } from "pinia"

export const useWindStore = defineStore("wind", {
    state: () => {
        return {

            wind : {
                directions: [
                  { id: "nw", img: require("@/assets/nw.jpg")},
                  { id: "n", img: require("@/assets/n.jpg")},
                  { id: "ne", img: require("@/assets/ne.jpg")},
                  { id: "e", img: require("@/assets/e.jpg")},
                  { id: "se", img: require("@/assets/se.jpg")},
                  { id: "s", img: require("@/assets/s.jpg")},
                  { id: "sw", img: require("@/assets/sw.jpg")},
                  { id: "w", img: require("@/assets/w.jpg")},
                ],
                speeds: [
                  { m_s: 0, mph: 0 },
                  { m_s: 1, mph: 2 },
                  { m_s: 2, mph: 4 },
                  { m_s: 3, mph: 6 },
                  { m_s: 4, mph: 8 },
                  { m_s: 5, mph: 10 },
                  { m_s: 6, mph: 12 },
                  { m_s: 7, mph: 14 },
                  { m_s: 8, mph: 16 },
                  { m_s: 9, mph: 18 },
                  { m_s: 10, mph: 20 },
                ]
            },

            usedDirections: [],
            usedSpeeds: [],

        }
    },
    actions: {
        addUsedWind (ev, type, value) {

            let target = null

            switch (type) {
                
                case "direction":

                    if (this.usedDirections.length == 7) {

                        document.querySelectorAll(".directions-item").forEach((el) => {
                            el.style.display = "inline-block"                            
                        })

                        // document.querySelector(".directions").style.display = "inline-block"

                        this.usedDirections = []

                        break
                    }

                    if (ev.target.className == "direction-img") {
                        target = ev.target.parentNode
                    } else {
                        target = ev.target
                    }

                    target.style.display = "none"

                    this.usedDirections.push(value)
                    console.log(this.usedDirections)

                    break

                case "speed":
                    
                if (this.usedSpeeds.length == 8) {

                    document.querySelectorAll(".speeds-item").forEach((el) => {
                        el.style.display = "inline-block"                            
                    })

                    // document.querySelector(".directions").style.display = "inline-block"

                    this.usedSpeeds = []

                    break
                }

                    ev.target.style.display = "none"

                    this.usedSpeeds.push(value)
                    console.log(this.usedSpeeds)
            }
        }
    }

})