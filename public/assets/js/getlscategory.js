/*const categoryMapping = {
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
    112: "Plagiarism",
    131: "entertainment.radio_and_tv"
  };*/

const categoryMapping = [
    {
        CategoryNumber: 1,
        CategoryName: "local-allow",
        CategoryDescription: "Local override of blocked domains",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.51",
        CategoryType: "",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 2,
        CategoryName: "local-block",
        CategoryDescription: "Local override of allowed domains",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.51",
        CategoryType: "",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 3,
        CategoryName: "ads",
        CategoryDescription: "Ad servers and advertising companies",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.51",
        CategoryType: "NU - Advertising",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 4,
        CategoryName: "adult",
        CategoryDescription: "Adult products, services, situations and humor",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2017-09-08T13:50:39.607",
        CategoryType: "NB - Adult - SA",
        KBID: null,
        ContentRating: "R"
    }, {
        CategoryNumber: 5,
        CategoryName: "audio-video",
        CategoryDescription: "Sources of MP3s, mpegs, and streaming audio/video",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-08-16T00:30:02.72",
        CategoryType: "NU - Recreation - SA",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 6,
        CategoryName: "business",
        CategoryDescription: "Business",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.527",
        CategoryType: "NU - Business and work",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 7,
        CategoryName: "errors",
        CategoryDescription: "Content database errors waiting to be purged",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.527",
        CategoryType: "NU - Miscellaneous",
        KBID: null,
        ContentRating: "Errors"
    }, {
        CategoryNumber: 8,
        CategoryName: "drugs",
        CategoryDescription: "Sites promoting illicit and illegal drug use",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-26T00:30:06.647",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "R"
    }, {
        CategoryNumber: 9,
        CategoryName: "education",
        CategoryDescription: "Education and reference sites",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.527",
        CategoryType: "NU - Education",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 10,
        CategoryName: "business.finance",
        CategoryDescription: "Banking, stock markets, insurance, and financial news",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.54",
        CategoryType: "NU - Business and work",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 11,
        CategoryName: "forums",
        CategoryDescription: "Unmoderated personal expression",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.54",
        CategoryType: "NB - Forums, chat, email",
        KBID: null,
        ContentRating: "R"
    }, {
        CategoryNumber: 12,
        CategoryName: "gambling",
        CategoryDescription: "Gambling, casinos, betting, lottery and play-for-cash/sweepstakes",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-08-16T00:30:02.72",
        CategoryType: "NB - Adult - SA",
        KBID: null,
        ContentRating: "R"
    }, {
        CategoryNumber: 13,
        CategoryName: "games",
        CategoryDescription: "Games, anime, cartoons, wallpapers and screen savers",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2010-04-14T20:48:03.123",
        CategoryType: "NU - Recreation - SA",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 14,
        CategoryName: "general",
        CategoryDescription: "General interest",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.557",
        CategoryType: "NU - Miscellaneous",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 15,
        CategoryName: "government",
        CategoryDescription: "Federal, state, local and international goverment",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2011-09-23T17:13:12.89",
        CategoryType: "NU - Society",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 16,
        CategoryName: "security.hacking",
        CategoryDescription: "Computer hacking",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-08-16T00:30:02.737",
        CategoryType: "NB - Security - SA",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 17,
        CategoryName: "violence.hate",
        CategoryDescription: "Sites that promote hate against different groups",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.557",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "R"
    }, {
        CategoryNumber: 18,
        CategoryName: "business.jobs",
        CategoryDescription: "Employment search, offerings and support",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.573",
        CategoryType: "NU - Business and work",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 19,
        CategoryName: "forums.mail",
        CategoryDescription: "Email sites",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.573",
        CategoryType: "NB - Forums, chat, email",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 20,
        CategoryName: "news",
        CategoryDescription: "News and magazines",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.573",
        CategoryType: "NU - Reference",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 21,
        CategoryName: "porn",
        CategoryDescription: "Pornography related sites",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.573",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "X"
    }, {
        CategoryNumber: 22,
        CategoryName: "porn.de",
        CategoryDescription: "German pornography sites",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.573",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "X"
    }, {
        CategoryNumber: 23,
        CategoryName: "porn.es",
        CategoryDescription: "Spanish pornography sites",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.603",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "X"
    }, {
        CategoryNumber: 24,
        CategoryName: "porn.fr",
        CategoryDescription: "French pornography sites",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.603",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "X"
    }, {
        CategoryNumber: 25,
        CategoryName: "porn.it",
        CategoryDescription: "Italian pornography sites",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.603",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "X"
    }, {
        CategoryNumber: 26,
        CategoryName: "porn.jp",
        CategoryDescription: "Japanese pornography sites",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.603",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "X"
    }, {
        CategoryNumber: 27,
        CategoryName: "porn.nl",
        CategoryDescription: "Dutch pornography sites",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.62",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "X"
    }, {
        CategoryNumber: 28,
        CategoryName: "security.proxy",
        CategoryDescription: "Web proxy servers and open SMTP relays",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.683",
        CategoryType: "NB - Security",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 29,
        CategoryName: "shopping",
        CategoryDescription: "Shopping sites",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.7",
        CategoryType: "NU - Recreation",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 30,
        CategoryName: "sports",
        CategoryDescription: "Sports sites",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.7",
        CategoryType: "NU - Recreation",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 31,
        CategoryName: "suspicious",
        CategoryDescription: "Recently discovered sites with suspicious words or phrases",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.7",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "X"
    }, {
        CategoryNumber: 32,
        CategoryName: "violence",
        CategoryDescription: "Sites promoting violence and anarchy",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.7",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "R"
    }, {
        CategoryNumber: 33,
        CategoryName: "security.warez",
        CategoryDescription: "Sites promoting illegal access and sharing of software and other copyrighted material",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.7",
        CategoryType: "NB - Security",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 34,
        CategoryName: "directory",
        CategoryDescription: "Directories and portals about specialized topics",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-26T00:30:06.66",
        CategoryType: "NU - Reference",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 35,
        CategoryName: "ads.popup-ads",
        CategoryDescription: "Popup ads",
        Allow: "1",
        RedirectURL: "(LOCAL)/ContentFiltering/PopupCloseWindow.html",
        TransactionTime: "2008-03-22T00:30:02.713",
        CategoryType: "NU - Advertising",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 36,
        CategoryName: "travel",
        CategoryDescription: "Hotels, resorts, cruises, transportation and vacation offerings",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.713",
        CategoryType: "NU - Recreation",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 37,
        CategoryName: "automobile",
        CategoryDescription: "Automobiles and motorcycles",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.713",
        CategoryType: "NU - Business and work",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 38,
        CategoryName: "forums.newsgroups",
        CategoryDescription: "Newsgroups, usenet and subscription newsletters",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.713",
        CategoryType: "NB - Forums, chat, email",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 39,
        CategoryName: "forums.personals",
        CategoryDescription: "Personal web pages and personal ads",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.713",
        CategoryType: "NB - Forums, chat, email",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 40,
        CategoryName: "humor",
        CategoryDescription: "Humor, puzzles, and brain-teasers",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.713",
        CategoryType: "NU - Recreation",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 41,
        CategoryName: "education.lifestyles",
        CategoryDescription: "Education about lifestyles - gay, lesbian, alternate",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2011-09-24T00:30:03.12",
        CategoryType: "NU - Education",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 42,
        CategoryName: "alcohol",
        CategoryDescription: "Production, promotion and sale of alcoholic beverages",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.73",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 43,
        CategoryName: "family.health",
        CategoryDescription: "Health care",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.73",
        CategoryType: "NU - Family life",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 44,
        CategoryName: "education.science",
        CategoryDescription: "Science and technology",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.73",
        CategoryType: "NU - Education",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 45,
        CategoryName: "entertainment",
        CategoryDescription: "Movies, television, radio, and celebrities",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-08-16T00:30:02.767",
        CategoryType: "NU - Recreation - SA",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 46,
        CategoryName: "kids_and_teens",
        CategoryDescription: "Kid safe web sites",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.73",
        CategoryType: "NU - Kids and teens",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 47,
        CategoryName: "education.arts",
        CategoryDescription: "Art, art history, architecture, graphic design,and  illustration",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2011-09-24T00:30:03.127",
        CategoryType: "NU - Education",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 48,
        CategoryName: "education.literature",
        CategoryDescription: "Literature, libraries, writers",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-08-16T00:30:02.767",
        CategoryType: "NU - Education",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 49,
        CategoryName: "music",
        CategoryDescription: "Bands and artists, concerts, DJs, lyrics, songwriting, and record labels",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.747",
        CategoryType: "NU - Recreation",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 50,
        CategoryName: "education.music",
        CategoryDescription: "Music education, history, instruments, marching, and museums",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-08-16T00:30:02.767",
        CategoryType: "NU - Education",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 51,
        CategoryName: "microsoft",
        CategoryDescription: "Microsoft and related sites",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.747",
        CategoryType: "NU - Business and work",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 52,
        CategoryName: "ads.banner-ads",
        CategoryDescription: "Banners ads",
        Allow: "1",
        RedirectURL: "(LOCAL)/ContentFiltering/BannerImage.gif",
        TransactionTime: "2008-03-22T00:30:02.747",
        CategoryType: "NU - Advertising",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 53,
        CategoryName: "ads.html-ads",
        CategoryDescription: "HTML ads",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.747",
        CategoryType: "NU - Advertising",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 54,
        CategoryName: "ads.javascript-ads",
        CategoryDescription: "Javascript ads",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.747",
        CategoryType: "NU - Business and work",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 55,
        CategoryName: "spam",
        CategoryDescription: "Sources of spam mail that does not involve porn, gambling, or drugs",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.747",
        CategoryType: "NU - Advertising",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 56,
        CategoryName: "ham",
        CategoryDescription: "Legitimate sources of email",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.747",
        CategoryType: "NU - Business and work",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 57,
        CategoryName: "computers",
        CategoryDescription: "Computers & Internet",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.76",
        CategoryType: "NU - Business and work",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 58,
        CategoryName: "family.religion",
        CategoryDescription: "Religion & Spirituality",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.76",
        CategoryType: "NU - Family life",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 59,
        CategoryName: "world",
        CategoryDescription: "Sites about regions and languages of the world",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.76",
        CategoryType: "NU - Society",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 60,
        CategoryName: "forums.p2p",
        CategoryDescription: "Peer to peer sites",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-08-16T00:30:02.783",
        CategoryType: "NB - Forums, chat, email - SA",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 61,
        CategoryName: "forums.im",
        CategoryDescription: "Instant messaging",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-08-16T00:30:02.783",
        CategoryType: "NB - Forums, chat, email - SA",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 62,
        CategoryName: "security.spyware",
        CategoryDescription: "Spyware - advertising supported software",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.777",
        CategoryType: "NB - Security - SA",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 63,
        CategoryName: "security.virus",
        CategoryDescription: "Viruses, malware, trojans, backdoors, hacker tools",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.777",
        CategoryType: "NB - Security - SA",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 64,
        CategoryName: "security.test",
        CategoryDescription: "Used for testing virus signatures and registry controls",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.777",
        CategoryType: "NB - Security - SA",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 65,
        CategoryName: "security.phishing",
        CategoryDescription: "Web sites of internet scams that try to get personal information",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-08-16T00:30:02.8",
        CategoryType: "NB - Security - SA",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 66,
        CategoryName: "weapons",
        CategoryDescription: "Web sites about guns, swords, knives, and other weapons",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2012-03-29T19:15:55.557",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "R"
    }, {
        CategoryNumber: 67,
        CategoryName: "access-denied",
        CategoryDescription: "access-denied",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.79",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 68,
        CategoryName: "law",
        CategoryDescription: "Law firms, courts, and legal matters",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.79",
        CategoryType: "NU - Business and work",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 69,
        CategoryName: "kids_and_teens.chat",
        CategoryDescription: "Monitored chat websites suitable for kids",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.79",
        CategoryType: "NU - Kids and teens",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 70,
        CategoryName: "adult.language",
        CategoryDescription: "Strong language",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2017-07-14T00:30:03.92",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "R"
    }, {
        CategoryNumber: 71,
        CategoryName: "forums.blogs",
        CategoryDescription: "Webblogs",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2011-01-19T21:27:15.467",
        CategoryType: "NB - Forums, chat, email",
        KBID: null,
        ContentRating: "R"
    }, {
        CategoryNumber: 72,
        CategoryName: "security",
        CategoryDescription: "Security risks",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-08-16T00:30:02.813",
        CategoryType: "NB - Security - SA",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 73,
        CategoryName: "business.real_estate",
        CategoryDescription: "Real estate, homes, offices",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.79",
        CategoryType: "NU - Business and work",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 74,
        CategoryName: "education.games",
        CategoryDescription: "Educational games for kids",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.807",
        CategoryType: "NU - Education",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 75,
        CategoryName: "education.social_science",
        CategoryDescription: "Social sciences",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.807",
        CategoryType: "NU - Education",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 76,
        CategoryName: "family.food",
        CategoryDescription: "Restaurants, grocery stores, recipes",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.807",
        CategoryType: "NU - Family life",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 77,
        CategoryName: "kids_and_teens.animals",
        CategoryDescription: "Cats, dogs, horses and other animals",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.807",
        CategoryType: "NU - Kids and teens",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 78,
        CategoryName: "shopping.spam",
        CategoryDescription: "Shopping websites that use spam email for marketing",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.807",
        CategoryType: "NU - Advertising",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 79,
        CategoryName: "society",
        CategoryDescription: "Culture, issues, ethnicity, people",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.807",
        CategoryType: "NU - Society",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 80,
        CategoryName: "education.sex",
        CategoryDescription: "High school level sex education websites",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.807",
        CategoryType: "NU - Education",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 81,
        CategoryName: "shopping.auctions",
        CategoryDescription: "Auctions",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:02.87",
        CategoryType: "NU - Recreation",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 82,
        CategoryName: "sports.fantasy",
        CategoryDescription: "Fantasy football, baseball, soccer, etc.",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:03.04",
        CategoryType: "NU - Recreation",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 83,
        CategoryName: "hobby",
        CategoryDescription: "Hobbies, crafts, collecting",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:04.15",
        CategoryType: "NU - Recreation",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 84,
        CategoryName: "sports.youth",
        CategoryDescription: "High schools sports teams and youth sports leagues",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:04.76",
        CategoryType: "NU - Recreation",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 85,
        CategoryName: "search",
        CategoryDescription: "Major search engines",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-04-11T06:39:56.117",
        CategoryType: "NU - Reference",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 86,
        CategoryName: "world.de",
        CategoryDescription: "World websites - German",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:05.497",
        CategoryType: "NU - Society",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 87,
        CategoryName: "world.es",
        CategoryDescription: "World websites - Spanish",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:05.527",
        CategoryType: "NU - Society",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 88,
        CategoryName: "world.fr",
        CategoryDescription: "World websites - French",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:05.573",
        CategoryType: "NU - Society",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 89,
        CategoryName: "world.it",
        CategoryDescription: "World websites - Italian",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:05.62",
        CategoryType: "NU - Society",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 90,
        CategoryName: "world.jp",
        CategoryDescription: "World websites - Japanese",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:05.667",
        CategoryType: "NU - Society",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 91,
        CategoryName: "world.nl",
        CategoryDescription: "World websites - Netherlands",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:05.747",
        CategoryType: "NU - Society",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 92,
        CategoryName: "world.pt",
        CategoryDescription: "World websites - Portuguese",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:05.887",
        CategoryType: "NU - Society",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 93,
        CategoryName: "world.ru",
        CategoryDescription: "World websites - Russian",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:05.933",
        CategoryType: "NU - Society",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 94,
        CategoryName: "porn.illicit",
        CategoryDescription: "Websites containing potentially illegal pornographic material.",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2012-01-02T19:21:29.837",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "X"
    }, {
        CategoryNumber: 95,
        CategoryName: "family",
        CategoryDescription: "Family life, cooking, gardening, home improvement",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:05.997",
        CategoryType: "NU - Family life",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 96,
        CategoryName: "society.politics",
        CategoryDescription: "Politics, political activism, political issues",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:05.997",
        CategoryType: "NU - Society",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 97,
        CategoryName: "society.crime",
        CategoryDescription: "Crime and the justice system",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.01",
        CategoryType: "NU - Society",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 98,
        CategoryName: "sports.martial_arts",
        CategoryDescription: "Martial arts",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.073",
        CategoryType: "NU - Recreation",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 99,
        CategoryName: "education.history",
        CategoryDescription: "History",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.15",
        CategoryType: "NU - Education",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 100,
        CategoryName: "adult.art",
        CategoryDescription: "Adult art",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2017-07-14T00:30:03.927",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "R"
    }, {
        CategoryNumber: 101,
        CategoryName: "adult.bodyart",
        CategoryDescription: "Body art, tatoos, body piercings",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2017-07-14T00:30:03.927",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "R"
    }, {
        CategoryNumber: 102,
        CategoryName: "adult.games",
        CategoryDescription: "Adult games",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2017-07-14T00:30:03.927",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "X"
    }, {
        CategoryNumber: 103,
        CategoryName: "adult.lifestyles",
        CategoryDescription: "Adult lifestyles",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2011-09-23T17:14:52.86",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "R"
    }, {
        CategoryNumber: 104,
        CategoryName: "shopping.office_supplies",
        CategoryDescription: "Major office supply websites",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.48",
        CategoryType: "NU - Recreation",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 105,
        CategoryName: "expired",
        CategoryDescription: "Domains whose registration has expired",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.497",
        CategoryType: "NU - Miscellaneous",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 106,
        CategoryName: "world.pl",
        CategoryDescription: "World websites - Polish",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.51",
        CategoryType: "NU - Society",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 107,
        CategoryName: "world.cn",
        CategoryDescription: "World websites - Chinese",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.51",
        CategoryType: "NU - Society",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 108,
        CategoryName: "world.kr",
        CategoryDescription: "World websites - Korean",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.527",
        CategoryType: "NU - Society",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 109,
        CategoryName: "porn.pl",
        CategoryDescription: "Polish pornogrphy sites",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2011-09-24T00:30:03.16",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "X"
    }, {
        CategoryNumber: 110,
        CategoryName: "porn.ru",
        CategoryDescription: "Russian pornography sites",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.527",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "X"
    }, {
        CategoryNumber: 111,
        CategoryName: "porn.pt",
        CategoryDescription: "Portuguese pornography sites",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.527",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "X"
    }, {
        CategoryNumber: 112,
        CategoryName: "plagiarism",
        CategoryDescription: "Web sites that sell term papers, research papers, and other ways to help students cheat",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2011-03-17T00:30:03.187",
        CategoryType: "NU - Miscellaneous",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 113,
        CategoryName: "parked",
        CategoryDescription: "Pay per click hosting web sites that park expired domains",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.527",
        CategoryType: "NB - Security",
        KBID: null,
        ContentRating: "R"
    }, {
        CategoryNumber: 114,
        CategoryName: "suspicious.script",
        CategoryDescription: "Websites whose only content is javascript - frequently used to hide porn sites",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.527",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 115,
        CategoryName: "business.construction",
        CategoryDescription: "Constuction, building, plumbing, home improvement",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2011-09-24T00:30:03.167",
        CategoryType: "NU - Business and work",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 116,
        CategoryName: "security.nettools",
        CategoryDescription: "Net tools, remote admin tools, internet server and client applications",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.54",
        CategoryType: "NB - Security - SA",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 117,
        CategoryName: "forums.social_networking",
        CategoryDescription: "Social networking and related websites such as myspace, facebook, and orkut. ",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.54",
        CategoryType: "NB - Forums, chat, email",
        KBID: null,
        ContentRating: "R"
    }, {
        CategoryNumber: 118,
        CategoryName: "forums.dating",
        CategoryDescription: "Dating websites like friendfinder, eharmony, and match.com",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.54",
        CategoryType: "NB - Forums, chat, email",
        KBID: null,
        ContentRating: "R"
    }, {
        CategoryNumber: 119,
        CategoryName: "business.manufacturing",
        CategoryDescription: "Manufacturing, industrial, and shipping companies",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.54",
        CategoryType: "NU - Business and work",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 120,
        CategoryName: "G-Rated",
        CategoryDescription: "G-Rated",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.54",
        CategoryType: "Rating",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 121,
        CategoryName: "PG-Rated",
        CategoryDescription: "PG-Rated",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.54",
        CategoryType: "Rating",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 122,
        CategoryName: "R-Rated",
        CategoryDescription: "R-Rated",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.557",
        CategoryType: "Rating",
        KBID: null,
        ContentRating: "R"
    }, {
        CategoryNumber: 123,
        CategoryName: "X-Rated",
        CategoryDescription: "X-Rated",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-26T00:30:06.74",
        CategoryType: "Rating",
        KBID: null,
        ContentRating: "X"
    }, {
        CategoryNumber: 124,
        CategoryName: "S-Rated",
        CategoryDescription: "S-Rated",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:06.557",
        CategoryType: "Rating",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 125,
        CategoryName: "security.potentially_unwanted_applications",
        CategoryDescription: "Potentially unwanted applications",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-02-29T17:37:57.9",
        CategoryType: "NB - Security - SA",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 126,
        CategoryName: "offensive",
        CategoryDescription: "Websites considered to be offensive to both adults and children",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2010-04-14T20:48:03.197",
        CategoryType: "NB - Adult",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 127,
        CategoryName: "computers.filehosting",
        CategoryDescription: "Image, filehosting, shareware, freeware websites",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-07-14T23:04:17.28",
        CategoryType: "NU - Business and work",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 128,
        CategoryName: "computers.consumer_electronics",
        CategoryDescription: "Consumer electronics - TVs, cell phones, MP3 players, etc.",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-07-14T23:06:36.243",
        CategoryType: "NU - Business and work",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 129,
        CategoryName: "education.media",
        CategoryDescription: "Educational streaming media resources",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2008-07-14T23:07:34.79",
        CategoryType: "NU - Education",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 130,
        CategoryName: "security.virus_ignore",
        CategoryDescription: "Virus signatures that should be ignored",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2009-09-16T20:56:15.227",
        CategoryType: "NB - Security - SA",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 131,
        CategoryName: "entertainment.radio_and_tv",
        CategoryDescription: "Radio and TV stations",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2010-04-06T23:52:39.567",
        CategoryType: "NU - Recreation",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 132,
        CategoryName: "photography",
        CategoryDescription: "Photography",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2010-07-01T16:01:00.4",
        CategoryType: "NU - Family life",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 133,
        CategoryName: "security.shorteners",
        CategoryDescription: "URL shorteners",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2014-08-06T20:17:46.02",
        CategoryType: "NU - Miscellaneous",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 134,
        CategoryName: "security.malware",
        CategoryDescription: "Websites that host malware",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2014-08-06T20:39:34.38",
        CategoryType: "NB - Security",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 135,
        CategoryName: "security.translators",
        CategoryDescription: "Language translation sites that allow full URL (webpage) translation and DO NOT honor filter restrictions (normally blocked)",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2015-11-25T19:13:50.007",
        CategoryType: "NB - Security -SA",
        KBID: null,
        ContentRating: "S"
    }, {
        CategoryNumber: 136,
        CategoryName: "computers.storage",
        CategoryDescription: "Sites that provide secure, online cloud storage",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2015-11-25T19:13:50.01",
        CategoryType: "NU - Business and work",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 137,
        CategoryName: "violence.extremism",
        CategoryDescription: "Sites that encourage or promote violence to further a set of beliefs or agenda,  or attempt to convert others to view that violence is appropriate to further a set of beliefs or agenda",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2015-12-15T21:36:50.37",
        CategoryType: "NB - Violence",
        KBID: null,
        ContentRating: "R"
    }, {
        CategoryNumber: 138,
        CategoryName: "computers.analytics",
        CategoryDescription: "Sites for Web Analytics services and the tools they use.",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2017-09-08T18:36:30.18",
        CategoryType: "NU - Business and work",
        KBID: null,
        ContentRating: "G"
    }, {
        CategoryNumber: 139,
        CategoryName: "esports",
        CategoryDescription: "Sport competition video games.",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2020-03-05T23:28:07.96",
        CategoryType: "NB - esports",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 140,
        CategoryName: "artificial-intelligence",
        CategoryDescription: "General AI-powered sites and services that provide user-accessible tooling and information. Hosts that do not fit into the more specific AI categories will be grouped here.",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2023-06-07T21:47:31.86",
        CategoryType: "NB - Artificial Intelligence",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 141,
        CategoryName: "artificial-Intelligence.generative",
        CategoryDescription: "Tools to create content using AI including but not limited to: Generating text, images and art, video, audio.",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2023-06-07T22:04:20.107",
        CategoryType: "NB - Artificial Intelligence generative",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 142,
        CategoryName: "artificial-intelligence.detective",
        CategoryDescription: "Tools designed to detect the usage of AI to generate content. This includes text analysis, images, video, and more.",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2023-06-07T22:04:20.107",
        CategoryType: "NU - Artificial Intelligence detective",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 144,
        CategoryName: "domain-sharing",
        CategoryDescription: "Hosts with shared space under their domain, allowing unmanaged content served typically as subdomains",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2008-03-22T00:30:05.417",
        CategoryType: "NB - Domain Sharing",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 200,
        CategoryName: "facebook",
        CategoryDescription: "Facebook social media and related URLs",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2017-12-13T02:00:03.943",
        CategoryType: "NB - Social Media",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 201,
        CategoryName: "twitter",
        CategoryDescription: "Twitter social media and related URLs",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2017-12-13T02:00:03.943",
        CategoryType: "NB - Social Media",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 202,
        CategoryName: "instagram",
        CategoryDescription: "Instagram social media and related URLs",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2017-12-13T02:00:03.943",
        CategoryType: "NB - Social Media",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 203,
        CategoryName: "pinterest",
        CategoryDescription: "Pinterest social media and related URLs",
        Allow: "0",
        RedirectURL: null,
        TransactionTime: "2017-12-13T02:00:03.943",
        CategoryType: "NB - Social Media",
        KBID: null,
        ContentRating: "PG"
    }, {
        CategoryNumber: 900,
        CategoryName: "education.videos",
        CategoryDescription: "Education safe videos about school subjects and current events",
        Allow: "1",
        RedirectURL: null,
        TransactionTime: "2017-07-13T13:02:32.343",
        CategoryType: "NU - Education",
        KBID: null,
        ContentRating: "G"
    }
    ]
  
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
			const category = categoryMapping.find(cat => cat.CategoryNumber === categoryNumber);
			const categoryName = category ? category.CategoryName : "Unknown Category";
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
