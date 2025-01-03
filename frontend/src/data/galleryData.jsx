import chairs from "../photos/picnic_2024/chairs.JPG";
import group from "../photos/picnic_2024/group.JPG";
import intro_line from "../photos/picnic_2024/intro_line.jpg";
import kite from "../photos/picnic_2024/kite.JPG";
import line_food from "../photos/picnic_2024/line_food.JPG";

import jakrebets from "../photos/picnic_2023/jakrebets.jpg";
import foodline from "../photos/picnic_2023/food_line.JPG";
import checkin from "../photos/picnic_2023/checkin.JPG";
import group2023 from "../photos/picnic_2023/group.jpg";
import kids_lunch from "../photos/picnic_2023/kids_lunch.jpg";
import ladies_lunch from "../photos/picnic_2023/ladies_lunch.JPG";
import musical_chairs from "../photos/picnic_2023/musical_chairs.JPG";

import mensvb from "../photos/picnic_2022/mensvb.JPG";
import group22 from "../photos/picnic_2022/2022_group.jpg";
import active from "../photos/picnic_2022/active.jpg";
import serving from "../photos/picnic_2022/serving.jpg";
import laughing from "../photos/picnic_2022/laughing.jpg";
import table from "../photos/picnic_2022/table.jpg";

import cover from "../photos/papago_hike/cover.jpg";
import ducks from "../photos/papago_hike/ducks.jpg";
import flex from "../photos/papago_hike/flex.jpg";
import hike_group from "../photos/papago_hike/hike_group.jpg";
import sign from "../photos/papago_hike/sign.jpg";

import FMSC from "../photos/FMSC Mesa- May 3rd.png"
import chudi from "../photos/AZ Konkanis Chudi puja held on Aug 25th 2024.png"

// Data structure to hold album info
export const ALBUMS = [
    {
        title: "Chudi Puja",
        images: [chudi],
    },
    {
        title: "FMSC Volunteering",
        images: [FMSC],
    },
    {
        title: "Hike at Papago Park 2024",
        images: [cover, ducks, flex, hike_group, sign],
        link: "https://photos.app.goo.gl/okAyaXBKE43wLjUC6"
    },
    {
        title: "2024 Picnic",
        images: [group, chairs, intro_line, kite, line_food],
        link: "https://photos.app.goo.gl/PyKaeB7SLgsmC3zM7"
    },
    {
        title: "2023 Picnic",
        images: [group2023, checkin, jakrebets, foodline, kids_lunch, ladies_lunch, musical_chairs],
        link: "https://photos.google.com/share/AF1QipNfzn8n5AYAFZGsZEnDr5p1s_nUZGVAFZ3K5VwooD_d69fMTIC6gOXO__LsUKwP3w?key=NTdwMVpjMW1hUEh4SDVWUUJHT3JEWG1hNE8yTGlB"
    },
    {
        title: "2022 Picnic",
        images: [group22, mensvb, active, serving, laughing, table],
        link: "https://photos.google.com/share/AF1QipNCunLLYO7Zx3P26CtrFbAOBjBZauYKE5rfR9-AcWQp3pJWttmz09FCQb8XSsQaXQ?key=X1RTcFh4aWZ1bXRaQ1U3MTZ5QXpjRW5GdFN4TWpn"
    }
];