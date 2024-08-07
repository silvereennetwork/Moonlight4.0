const categoryMapping = {
    3: "Ads",
    4: "Adult",
    5: "Audio-Video",
    6: "Business",
    7: "Errors",
    8: "Drugs",
    9: "Education",
    10: "Business.Finance",
    11: "Forums",
    12: "Gambling",
    13: "Games",
    14: "General",
    15: "Government",
    16: "Security.Hacking",
    17: "Violence.Hate",
    18: "Business.Jobs",
    19: "Forums.Mail",
    20: "News",
    21: "Porn",
    22: "Porn.DE",
    23: "Porn.ES",
    24: "Porn.FR",
    25: "Porn.IT",
    26: "Porn.JP",
    27: "Porn.NL",
    28: "Security.Proxy",
    29: "Shopping",
    30: "Sports",
    31: "Suspicious",
    32: "Violence",
    33: "Security.Warez",
    34: "Directory",
    35: "Ads.Popup-Ads",
    36: "Travel",
    37: "Automobile",
    38: "Forums.Newsgroups",
    39: "Forums.Personals",
    40: "Humor",
    41: "Education.Lifestyles",
    42: "Alcohol",
    43: "Family.Health",
    44: "Education.Science",
    45: "Entertainment",
    46: "Kids_and_Teens",
    47: "Education.Arts",
    48: "Education.Literature",
    49: "Music",
    50: "Education.Music",
    51: "Microsoft",
    52: "Ads.Banner-Ads",
    53: "Ads.HTML-Ads",
    54: "Ads.Javascript-Ads",
    55: "Spam",
    56: "Ham",
    57: "Computers",
    58: "Family.Religion",
    59: "World",
    60: "Forums.P2P",
    61: "Forums.IM",
    62: "Security.Spyware",
    63: "Security.Virus",
    64: "Security.Test",
    65: "Security.Phishing",
    66: "Weapons",
    67: "Access-Denied",
    68: "Law",
    69: "Kids_and_Teens.Chat",
    70: "Adult.Language",
    71: "Forums.Blogs",
    72: "Security",
    73: "Business.Real_Estate",
    74: "Education.Games",
    75: "Education.Social_Science",
    76: "Family.Food",
    77: "Kids_and_Teens.Animals",
    78: "Shopping.Spam",
    79: "Society",
    80: "Education.Sex",
    81: "Shopping.Auctions",
    82: "Sports.Fantasy",
    95: "Family",
    96: "Society.Politics",
    97: "Society.Crime",
    98: "Sports.Martial_Arts",
    99: "Education.History",
    100: "Adult.Art",
    101: "Adult.Bodyart",
    102: "Adult.Games",
    103: "Adult.Lifestyles",
    104: "Shopping.Office_Supplies",
    105: "Expired",
    106: "World.PL",
    107: "World.CN",
    108: "World.KR",
    109: "Porn.PL",
    110: "Porn.RU",
    111: "Porn.PT",
    112: "Plagiarism"
  };
  
  async function getLightspeedCategory(site) {
    const url = "https://production-archive-proxy-api.lightspeedsystems.com/archiveproxy";
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": "onEkoztnFpTi3VG7XQEq6skQWN3aFm3h"
    };
    const data = {
      query: `
        query getDeviceCategorization($itemA: CustomHostLookupInput!, $itemB: CustomHostLookupInput!) {
          a: custom_HostLookup(item: $itemA) {
            request {
              host
            }
            cat
            action
            source_ip
            archive_info {
              filter {
                category
                transTime
                reason
                isSafetyTable
                isTLD
              }
              rocket {
                category
              }
            }
          }
          b: custom_HostLookup(item: $itemB) {
            request {
              host
            }
            cat
            action
            source_ip
            archive_info {
              filter {
                category
                transTime
                reason
              }
              rocket {
                category
              }
            }
          }
        }
      `,
      variables: {
        itemA: {
          hostname: site,
          getArchive: true
        },
        itemB: {
          hostname: site,
          getArchive: true
        }
      }
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        const responseData = await response.json();
        const categoryNumber = responseData.data.a.archive_info.filter.category;
        const categoryName = categoryMapping[categoryNumber] || "Unknown Category";
        const reason = responseData.data.a.archive_info.filter.reason;
        const transTime = responseData.data.a.archive_info.filter.transTime;
  
        return {
          categoryName,
          categoryNumber,
          reason,
          transTime
        };
      } else {
        console.error(`Request failed with status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }