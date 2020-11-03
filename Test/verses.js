var master = {
    order: {
        1:  "first",
        2:  "second",
        3:  "third",
        4:  "fourth",
        5:  "fifth",
        6:  "sixth",
        7:  "seventh",
        8:  "eighth",
        9:  "ninth",
        10: "tenth",
        11: "eleventh",
        12: "twelth",
        13: "thirteenth",
        14: "fourteenth",
        15: "fifteenth",
        16: "sixteenth",
        17: "seventeenth",
        18: "eighteenth",
        19: "nineteenth",
        20: "twentieth"
    },
    joyful: {
        1: "The First Joyful Mystery: The Annunciation (Humility)",
        2: "The Second Joyful Mystery: The Visitation (Charity)",
        3: "The Third Joyful Mystery: The Nativity of Our Lord (Detachment)",
        4: "The Fourth Joyful Mystery: The Presentation in the Temple (Purity)",
        5: "The Fifth Joyful Mystery: The Finding of Our Lord in the Temple (Wisdom)"
    },
    sorrowful: {
        1: "The First Sorrowful Mystery: The Agony in the Garden (Contrition)",
        2: "The Second Sorrowful Mystery: The Scourging (Mortification)",
        3: "The Third Sorrowful Mystery: The Crowning with Thorns (Moral Courage)",
        4: "The Fourth Sorrowful Mystery: The Carrying of the Cross (Patience)",
        5: "The Fifth Sorrowful Mystery: The Crucifixion (Salvation)"
    },
    glorious: {
        1: "The First Glorious Mystery: The Resurrection (Faith)",
        2: "The Second Glorious Mystery: The Ascension (Hope)",
        3: "The Third Glorious Mystery: The Descent of the Holy Spirit (Gifts of the Holy Spirit)",
        4: "The Fourth Glorious Mystery: The Assumption (Devotion to Mary)",
        5: "The Fifth Glorious Mystery: The Coronation of the B.V.M. (Eternal Happiness)"
    }
}

var DRA = {
    joyful: {
        1: {
            1:  "&ldquo;Pride goeth before destruction: and the spirit is lifted up before a fall.&rdquo; (Prov. 16:18)",
            2:  "&ldquo;Be humbled in the sight of the Lord, and he will exalt you.&rdquo; (Jam. 4:10)",
            3:  "&ldquo;Have this mind among yourselves, which is yours in Christ Jesus,&rdquo; (Phil. 2:5)",
            4:  "&ldquo;Do not be slothful in zeal, be fervent in spirit, serve the Lord.&rdquo; (Rom. 12:11)",
            5:  "&ldquo;The fruit of humility is the fear of the Lord, riches and glory and life.&rdquo; (Prov. 22:4)",
            6:  "&ldquo;He shall scorn the scorners, and to the meek he will give grace.&rdquo; (Prov. 3:34)",
            7:  "&ldquo;He will guide the mild in judgment: he will teach the meek his ways.&rdquo; (Ps. 24:9)",
            8:  "&ldquo;He must increase, but I must decrease.&rdquo; (Jn. 3:30)",
            9:  "&ldquo;Blessed are the poor in spirit: for theirs is the kingdom of heaven.&rdquo; (Mt. 5:3)",
            10: "&ldquo;But the meek shall inherit the land, and shall delight in abundance of peace.&rdquo; (Ps 36:11)"
        },
        2: {
            1:  "&ldquo;He that hath mercy on the poor, lendeth to the Lord: and he will repay him.&rdquo; (Prov. 19:17)",
            2:  "&ldquo;Bear ye one another's burdens; and so you shall fulfill the law of Christ. &rdquo; (Gal. 6:2)",
            3:  "&ldquo;But above all these things have charity, which is the bond of perfection:&rdquo; (Col. 3:14)",
            4:  "&ldquo;Love does no wrong to a neighbor; therefore love is the fulfilling of the law.&rdquo; (Rom. 13:10)",
            5:  "&ldquo;Contribute to the needs of the saints and seek to show hospitality.&rdquo; (Rom. 12:13)",
            6:  "&ldquo;Hatred stirreth up strifes: and charity covereth all sins.&rdquo; (Prov. 10:12)",
            7:  "&ldquo;Let us therefore love God, because God first hath loved us.&rdquo; (1 Jn. 4:19)",
            8:  "&ldquo;He that loveth not, knoweth not God: for God is charity.&rdquo; (1 Jn. 4:8)",
            9:  "&ldquo;Let the charity of the brotherhood abide in you.&rdquo; (Heb. 13:1)",
            10: "&ldquo;Let every one of you please his neighbour unto good, to edification.&rdquo; (Rom. 15:2)"
        },
        3: {
            1:  "&ldquo;Better is a little with justice, than great revenues with iniquity.&rdquo; (Prov. 16:8)",
            2:  "&ldquo;I know that the Lord will do justice to the needy, and will revenge the poor.&rdquo; (Ps. 139:13)",
            3:  "&ldquo;Better is a little to the just, than the great riches of the wicked.&rdquo; (Ps. 36:16)",
            4:  "&ldquo;Your riches are corrupted: and your garments are motheaten.&rdquo; (Jam. 5:2)",
            5:  "&ldquo;Mind the things that are above, not the things that are upon the earth.&rdquo; (Col. 3:2)",
            6:  "&ldquo;For though we walk in the flesh, we do not war according to the flesh.&rdquo; (2 Cor. 10:3)",
            7:  "&ldquo;Come to me, all you that labour, and are burdened, and I will refresh you.&rdquo; (Mt. 11:28)",
            8:  "&ldquo;With me are riches and glory, glorious riches and justice.&rdquo; (Prov. 8:18)",
            9:  "&ldquo;The Lord doth mercies, and judgment for all that suffer wrong.&rdquo; (Ps. 102:6)",
            10: "&ldquo;But judgment shall be revealed as water, and justice as a mighty torrent.&rdquo; (Am. 5:24)"
        },
        4: {
            1:  "&ldquo;Blessed are the clean of heart: for they shall see God.&rdquo; (Mt. 5:8)",
            2:  "&ldquo;By what doth a young man correct his way? by observing thy words.&rdquo; (Ps. 118:9)",
            3:  "&ldquo;Wash me yet more from my iniquity, and cleanse me from my sin.&rdquo; (Ps. 50:4)",
            4:  "&ldquo;Because it is written: You shall be holy, for I am holy.&rdquo; (1 Pt. 1:16)",
            5:  "&ldquo;Lie not one to another: stripping yourselves of the old man with his deeds,&rdquo; (Col. 3:9)",
            6:  "&ldquo;If you know these things, you shall be blessed if you do them.&rdquo; (Jn. 13:17)",
            7:  "&ldquo;Seek ye the Lord, and his power: seek ye his face evermore.&rdquo; (1 Chr. 16:11)",
            8:  "&ldquo;I can do all these things in him who strengtheneth me.&rdquo; (Phil. 4:13)",
            9:  "&ldquo;Stand fast, and be not held again under the yoke of bondage.&rdquo; (Gal. 5:1)",
            10: "&ldquo;For you are bought with a great price. Glorify and bear God in your body.&rdquo; (1 Cor 6:20)"
        },
        5: {
            1:  "&ldquo;Blessed is the man that findeth wisdom and is rich in prudence:&rdquo; (Prov. 3:13)",
            2:  "&ldquo;The wise of heart receiveth precepts: a fool is beaten with lips.&rdquo; (Prov. 10:8)",
            3:  "&ldquo;In whom are hid all the treasures of wisdom and knowledge.&rdquo; (Col. 2:3)",
            4:  "&ldquo;And you shall know the truth, and the truth shall make you free.&rdquo; (Jn. 8:32)",
            5:  "&ldquo;In the ancient is wisdom, and in length of days prudence.&rdquo; (Job 12:12)",
            6:  "&ldquo;With him is wisdom and strength, he hath counsel and understanding.&rdquo; (Job 12:13)",
            7:  "&ldquo;The fruit of the just man is a tree of life: and he that gaineth souls, is wise.&rdquo; (Prov. 11:30)",
            8:  "&ldquo;Now there are diversities of graces, but the same Spirit;&rdquo; (1 Cor. 12:4)",
            9:  "&ldquo;Thanks be to God for his unspeakable gift.&rdquo; (2 Cor. 9:15)",
            10: "&ldquo;For the gifts and the calling of God are without repentance.&rdquo; (Rom. 11:29)"
        }
    },
    sorrowful:{
        1: {
            1:  "&ldquo;For all have sinned, and do need the glory of God.&rdquo; (Rom. 3:23)",
            2:  "&ldquo;We know that we are of God, and the whole world is seated in wickedness.&rdquo; (1 Jn. 5:19)",
            3:  "&ldquo;Whosoever committeth sin committeth also iniquity; and sin is iniquity.&rdquo; (1 Jn. 3:4)",
            4:  "&ldquo;To him therefore who knoweth to do good, and doth it not, to him it is sin.&rdquo; (Jam. 4:17)",
            5:  "&ldquo;Because I was silent my bones grew old; whilst I cried out all the day long.&rdquo; (Ps. 31:3)",
            6:  "&ldquo;Let him do penance for his sin,&rdquo; (Lev. 5:5)",
            7:  "&ldquo;For I will declare my inequity : and I will think for my sin.&rdquo; (Ps. 37:19)",
            8:  "&ldquo;Bring forth therefore fruit worthy of penance.&rdquo; (Mt. 3:8)",
            9:  "&ldquo;And saying: Do penance: for the kingdom of heaven is at hand.&rdquo; (Mt. 3:2)",
            10: "&ldquo;Because no word shall be impossible with God.&rdquo; (Lk. 1:37)"
        },
        2: {
            1:  "&ldquo;And they who are in the flesh, cannot please God.&rdquo; (Rom. 8:8)",
            2:  "&ldquo;For you have not yet resisted unto blood, striving against sin:&rdquo; (Heb. 12:4)",
            3:  "&ldquo;I say then, walk in the spirit, and you shall not fulfill the lusts of the flesh.&rdquo; (Gal. 5:16)",
            4:  "&ldquo;If thou, O Lord, wilt mark iniquities: Lord, who shall stand it.&rdquo; (Ps. 129:3)",
            5:  "&ldquo;The hearing ear, and the seeing eye, the Lord hath made them both.&rdquo; (Prov. 20:12)",
            6:  "&ldquo;He that hath an ear, let him hear what the Spirit saith to the churches.&rdquo; (Rev. 2:29)",
            7:  "&ldquo;Be subject therefore to God, but resist the devil, and he will fly from you.&rdquo; (Jam. 4:7)",
            8:  "&ldquo;But given to hospitality, gentle, sober, just, holy, continent:&rdquo; (Tit. 1:8)",
            9:  "&ldquo;But prove all things; hold fast that which is good.&rdquo; (1 Thess. 5:21)",
            10: "&ldquo;Proving what is well pleasing to God:&rdquo; (Eph. 5:10)"
        },
        3: {
            1:  "&ldquo;You are the light of the world. A city seated on a mountain cannot be hid.&rdquo; (Mt. 5:14)",
            2:  "&ldquo;Wonder not, brethren, if the world hate you.&rdquo; (1 Jn. 3:13)",
            3:  "&ldquo;If the world hate you, know ye, that it hath hated me before you.&rdquo; (Jn. 15:18)",
            4:  "&ldquo;Even fools despise me; and when I gone from them, they spoke against me.&rdquo; (Job 19:18)",
            5:  "&ldquo;They kept not the covenant of God: and in his law they would not walk.&rdquo; (Ps. 77:10)",
            6:  "&ldquo;They are not of the world, as I also am not of the world.&rdquo; (Jn. 17:16)",
            7:  "&ldquo;I am very young and despised; but I forgot not thy justifications.&rdquo; (Ps. 118:14)",
            8:  "&ldquo;And you are Christ's; and Christ is God's.&rdquo; (1 Cor. 3:23)",
            9:  "&ldquo;We know that we are of God, and the whole world is seated in wickedness.&rdquo; (1 Jn. 5:19)",
            10: "&ldquo;Better are the wounds of a friend, than the deceitful kisses of an enemy.&rdquo; (Prov. 27:6)"
        },
        4: {
            1:  "&ldquo;And he that taketh not up his cross, and followeth me, is not worthy of me.&rdquo; (Mt. 10:38)",
            2:  "&ldquo;If we suffer, we shall also reign with him. If we deny him, he will also deny us.&rdquo; (2 Tim. 2:12)",
            3:  "&ldquo;And all that will live godly in Christ Jesus, shall suffer persecution.&rdquo; (2 Tim. 3:12)",
            4:  "&ldquo;Rejoicing in hope. Patient in tribulation. Instant in prayer.&rdquo; (Rom. 12:12)",
            5:  "&ldquo;And in doing good, let us not fail. For in due time we shall reap, not failing.&rdquo; (Gal. 6:9)",
            6:  "&ldquo;But if we hope for that which we see not, we wait for it with patience.&rdquo; (Rom. 8:25)",
            7:  "&ldquo;And why call you me, Lord, Lord; and do not the things which I say?&rdquo; (Lk. 6:46)",
            8:  "&ldquo;You are my friends, if you do the things that I command you.&rdquo; (Jn. 15:14)",
            9:  "&ldquo;And patience trial; and trial hope;&rdquo; (Rom. 5:4)",
            10: "&ldquo;And so patiently enduring he obtained the promise.&rdquo; (Heb. 6:15)"
        },
        5: {
            1:  "&ldquo;Salvation is of the Lord: and thy blessing is upon thy people.&rdquo; (Ps. 3:9)",
            2:  "&ldquo;For by one oblation he hath perfected for ever them that are sanctified.&rdquo; (Hebr. 10:14)",
            3:  "&ldquo;And of his fulness we all have received, and grace for grace.&rdquo; (Jn. 1:16)",
            4:  "&ldquo;For the grace of God our Saviour hath appeared to all men;&rdquo; (Tit. 2:11)",
            5:  "&ldquo;Thou therefore, my son, be strong in the grace which is in Christ Jesus:&rdquo; (2 Tim. 2:1)",
            6:  "&ldquo;What shall we say, then? shall we continue in sin, that grace may abound?&rdquo; (Rom. 6:1)",
            7:  "&ldquo;He came unto his own, and his own received him not.&rdquo; (Jn. 1:11)",
            8:  "&ldquo;A faithful saying: for if we be dead with him, we shall live also with him.&rdquo; (2 Tim. 2:11)",
            9:  "&ldquo;And as in Adam all die, so also in Christ all shall be made alive.&rdquo; (1 Cor. 15:22)",
            10: "&ldquo;But he that shall persevere to the end, he shall be saved.&rdquo; (Mt. 24:13)"
        }
    },
    glorious: {
        1: {
            1:  "&ldquo;For whether I, or they, so we preach, and so you have believed.&rdquo; (1 Cor. 15:11)",
            2:  "&ldquo;Faith then cometh by hearing; and hearing by the word of Christ.&rdquo; (Rom. 10:17)",
            3:  "&ldquo;For by him we have access both in one Spirit to the Father.&rdquo; (Eph. 2:18)",
            4:  "&ldquo;And Jesus answering, saith to them: Have the faith of God&rdquo; (Mk. 11:22)",
            5:  "&ldquo;For the scripture saith: Whosoever believeth in him, shall not be confounded.&rdquo; (Rom. 10:11)",
            6:  "&ldquo;And his mercy is from generation unto generations, to them that fear him.&rdquo; (Lk. 1:50)",
            7:  "&ldquo;But now also I know that whatsoever thou wilt ask of God, God will give it thee.&rdquo; (Jn. 11:22)",
            8:  "&ldquo;And he said to him: Arise, go thy way; for thy faith hath made thee whole.&rdquo; (Lk. 17:19)",
            9:  "&ldquo;For we walk by faith, and not by sight.&rdquo; (2 Cor. 5:7)",
            10: "&ldquo;One Lord, one faith, one baptism.&rdquo; (Eph. 4:5)"
        },
        2: {
            1:  "&ldquo;Philip saith to him: Lord, shew us the Father, and it is enough for us.&rdquo; (Jn. 14:8)",
            2:  "&ldquo;For they that say these things, do signify that they seek a country.&rdquo; (Heb. 11:14)",
            3:  "&ldquo;Thy kingdom come. Thy will be done on earth as it is in heaven.&rdquo; (Mt. 6:10)",
            4:  "&ldquo;For the end of the law is Christ, unto justice to every one that believeth.&rdquo; (Rom. 10:4)",
            5:  "&ldquo;And they shall bring the glory and honour of the nations into it.&rdquo; (Rev. 21:26)",
            6:  "&ldquo;Do not therefore lose your confidence, which hath a great reward.&rdquo; (Heb. 10:35)",
            7:  "&ldquo;You shall seek me, and shall find me: when you shall seek me with all your heart.&rdquo; (Jer. 19:13)",
            8:  "&ldquo;In that day you shall know, that I am in my Father, and you in me, and I in you.&rdquo; (Jn. 14:20)",
            9:  "&ldquo;That we may be unto the praise of his glory, we who before hoped Christ:&rdquo; (Eph. 1:12)",
            10: "&ldquo;Receiving the end of your faith, even the salvation of your souls.&rdquo; (1 Pt. 1:9)"
        },
        3: {
            1:  "&ldquo;And the manifestation of the Spirit is given to every man unto profit.&rdquo; (1 Cor. 12:7)",
            2:  "&ldquo;If we live in the Spirit, let us also walk in the Spirit.&rdquo; (Gal. 5:25)",
            3:  "&ldquo;For whosoever are led by the Spirit of God, they are the sons of God.&rdquo; (Rom. 8:14)",
            4:  "&ldquo;For the Spirit himself giveth testimony to our spirit, that we are the sons of God.&rdquo; (Rom. 8:16)",
            5:  "&ldquo;In whom you also are built together into an habitation of God in the Spirit.&rdquo; (Eph. 2:22)",
            6:  "&ldquo;Now the Lord is a Spirit. And where the Spirit of the Lord is, there is liberty.&rdquo; (2 Cor. 3:17)",
            7:  "&ldquo;One body and one Spirit; as you are called in one hope of your calling.&rdquo; (Eph. 4:4)",
            8:  "&ldquo;Create a clean heart in me, O God: and renew a right spirit within my bowels.&rdquo; (Ps. 50:12)",
            9:  "&ldquo;The spirit of God made me, and the breath of the Almighty gave me life.&rdquo; (Job 33:4)",
            10: "&ldquo;The grace of our Lord Jesus Christ be with your spirit, brethren. Amen.&rdquo; (Gal. 6:18)"
        },
        4: {
            1:  "&ldquo;Because thou wilt not leave my soul in hell; nor wilt then give thy holy one to see corruption.&rdquo; (Ps. 15:10)",
            2:  "&ldquo;Behold my beloved speaketh to me: Arise, make haste, my love, my dove, my beautiful one, and come.&rdquo; (Ss. 2:10)",
            3:  "&ldquo;Thou art all fair, O my love, and there is not a spot in thee.&rdquo; (Ss. 4:7)",
            4:  "&ldquo;And the king shall greatly desire thy beauty; for he is the Lord thy God, and him they shall adore.&rdquo; (Ps. 44:12)",
            5:  "&ldquo;And blessed art thou that hast believed, because those things shall be accomplished that were spoken to thee by the Lord.&rdquo; (Lk. 1:45)",
            6:  "&ldquo;Because he hath regarded the humility of his handmaid; for behold from henceforth all generations shall call me blessed.&rdquo; (Lk. 1:48)",
            7:  "&ldquo;Because he that is mighty, hath done great things to me; and holy is his name.&rdquo; (Lk. 1:49)",
            8:  "&ldquo;I am the mother of fair love, and of fear, and of knowledge, and of holy hope.&rdquo; (Sir. 24:24)",
            9:  "&ldquo;For if we have been planted together in the likeness of his death, we shall be also in the likeness of his resurrection.&rdquo; (Rom. 6:5)",
            10: "&ldquo;Arise, O Lord, into thy resting place: thou and the ark, which thou hast sanctified.&rdquo; (Ps. 131:8)"
        },
        5: {
            1:  "&ldquo;I will put enmities between thee and the woman, and thy seed and her seed: she shall crush thy head, and thou shalt lie in wait for her heel.&rdquo; (Gen. 3:15)",
            2:  "&ldquo;And the temple of God was opened in heaven: and the ark of his testament was seen in his temple, and there were lightnings, and voices, and an earthquake, and great hail.&rdquo; (Rev. 11:19)",
            3:  "&ldquo;And a great sign appeared in heaven: A woman clothed with the sun, and the moon under her feet, and on her head a crown of twelve stars&rdquo; (Rev. 12:1)",
            4:  "&ldquo;And I John saw the holy city, the new Jerusalem, coming down out of heaven from God, prepared as a bride adorned for her husband.&rdquo; (Rev. 21:2)",
            5:  "&ldquo;I was set up from eternity, and of old before the earth was made.&rdquo; (Prov. 8:23)",
            6:  "&ldquo;I dwelt in the highest places, and my throne is in a pillar of a cloud.&rdquo; (Sir. 24:7)",
            7:  "&ldquo;My memory is unto everlasting generations.&rdquo; (Sir. 24:28)",
            8:  "&ldquo;Come over to me, all ye that desire me, and be filled with my fruits.&rdquo; (Sir. 24:26)",
            9:  "&ldquo;And she cried out with a loud voice, and said: Blessed art thou among women, and blessed is the fruit of thy womb.&rdquo; (Lk. 1:42)",
            10: "&ldquo;He shall be great, and shall be called the Son of the most High; and the Lord God shall give unto him the throne of David his father; and he shall reign in the house of Jacob for ever.&rdquo; (Lk. 1:32)"
        }
    }
}

var focus = {
    joyful: {
        1: {
            1:  "The time for the Incarnation is at hand.",
            2:  "Of all women God prepared Mary from her conception to be the Mother of the Incarnate Word.",
            3:  "The Angel Gabriel announces: &ldquo;Hail, full of grace! The Lord is with thee.&rdquo;",
            4:  "Mary wonders at this salutation.",
            5:  "The Angel assures her: &ldquo;Fear not . . . you shall conceive in your womb, and give birth to a Son.&rdquo;",
            6:  "Mary is troubled for she has made a vow of virginity.",
            7:  "The Angel answers that she will conceive by the power of the Holy Spirit, and her Son will be called the Son of God.",
            8:  "The Incarnation awaits Mary’s consent.",
            9:  "Mary answers: &ldquo;Behold the handmaid of the Lord. Be it done unto me according to your word.&rdquo;",
            10: "The Word was made flesh and dwelt among us."
        },
        2: {
            1:  "Mary’s cousin Elizabeth conceived a son in her old age… for nothing is impossible with God.",
            2:  "Charity prompts Mary to hasten to visit Elizabeth in the hour of her need.",
            3:  "The journey to Elizabeth’s home is about eighty miles requiring four or five days.",
            4:  "Though long and arduous, the journey is joyous, for Mary bears with her the Incarnate Word.",
            5:  "At Mary’s salutation, John the Baptist is sanctified in his mother’s womb.",
            6:  "Elizabeth exclaims: &ldquo;Blessed are you among women, and blessed is the fruit of your womb.&rdquo;",
            7:  "&ldquo;How have I deserved that the mother of my Lord should come to me?&rdquo;",
            8:  "&ldquo;Blessed is she who believed that the Lord’s words to her would be fulfilled.&rdquo;",
            9:  "Mary replies: &ldquo;My soul proclaims the greatness of the Lord, and my spirit finds joy in God my Savior.&rdquo;",
            10: "Mary serves her cousin in all humility for three months until the birth of John the Baptist."
        },
        3: {
            1:  "Joseph and Mary go to Bethlehem to comply with the decree of Caesar Augustus",
            2:  "The hour for Mary to give birth is near, but there is no room in the inn.",
            3:  "In the stillness of the night, the Savior is born in a cave, Mary remaining a Virgin.",
            4:  "She wraps Him in swaddling clothes and lays Him in a manger.",
            5:  "In unspeakable joy Mary gathers to her bosom the Flower of her virginity.",
            6:  "Jesus enters the world in poverty to teach the lesson of detachment from earthly things.",
            7:  "The angel announces to the shepherds: &ldquo;Today there is born to you in the town of David a Savior, Who is Christ the Lord.&rdquo;",
            8:  "The angelic chorus sing: &ldquo;Glory to God in the highest, and peace to His people on earth.&rdquo;",
            9:  "The shepherds come to the stable to pay homage to the Infant Jesus.",
            10: "The Magi come to adore the Holy Child and offer Him gifts."
        },
        4: {
            1:  "Observing the law of Moses they take Jesus to the Temple to present Him to the Lord.",
            2:  "According to the Law the firstborn male child of every family should be consecrated to the Lord.",
            3:  "Mary offers her Son to the Father, then ransoms Him back at the price paid by the poor.",
            4:  "Jesus is not subject to the law of Moses, yet to teach obedience, submits to it.",
            5:  "Mary is not subject to the law of purification, yet in humility she submits to it.",
            6:  "God had revealed to Simeon that he would not see death until he had seen the Messiah.",
            7:  "Recognizing the Child, he prays: &ldquo;Now you can dismiss your servant in peace. You have fulfilled your word.&rdquo;",
            8:  "&ldquo;This Child is destined to be the downfall and rise of many in Israel, a sign that will be opposed.&rdquo;",
            9:  "And to Mary Simeon reveals: &ldquo;And your own soul a sword shall pierce.&rdquo;",
            10: "After they fulfill all the Law requires they return to Nazareth."
        },
        5: {
            1:  "When Jesus is twelve years old, He goes with His parents to Jerusalem for the feast of the Passover.",
            2:  "After the feast of the Passover, Joseph and Mary unknowingly set out for Nazareth without Jesus",
            3:  "At the end of the first day’s journey they discover Jesus is missing.",
            4:  "His parents return immediately looking for Him.",
            5:  "This loss causes grief and anxiety beyond our understanding to the hearts of Mary and Joseph.",
            6:  "On the third day, they find Jesus in the Temple among the Doctors who were astonished at His wisdom.",
            7:  "Mary: &ldquo;Son, why have you done this to us? Your father and I have been searching for You in sorrow.&rdquo;",
            8:  "Jesus: &ldquo;Why did you search for Me? Did you not know that I must be about My Father’s business?&rdquo;",
            9:  "Jesus goes down with them to Nazareth, and is subject to them.",
            10: "Mary keeps all these things in her heart."
        }
    },
    sorrowful: {
        1: {
            1:  "Jesus comes with his disciples to Gethsemani: &ldquo;Stay here, while I go yonder and pray.&rdquo;",
            2:  "Entering the garden with Peter, James, and John, Jesus prays, &ldquo;My soul is sorrowful unto death.&rdquo;",
            3:  "Jesus sees the sins of all mankind, whose guilt He has taken upon Himself.",
            4:  "He sees the wrath of the Father which His sufferings must appease.",
            5:  "So great is his anguish that His sweat becomes as drops of blood falling to the ground.",
            6:  "An angel appears to Him from heaven to strengthen Him.",
            7:  "&ldquo;Father, if it be possible, let this cup pass from Me; yet, not My will but Yours be done.&rdquo;",
            8:  "Finding the disciples asleep: &ldquo;Could you not watch one hour with me?&rdquo;",
            9:  "Jesus is betrayed by Judas, cruelly bound and led away.",
            10: "Father, by the merits of the agony of Jesus in the Garden, have mercy on us and on the whole world."
        },
        2: {
            1:  "Jesus is taken before the High Priest where He is falsely accused, buffeted and insulted.",
            2:  "The Jewish leaders take Jesus before Pilate, for only he can impose the death penalty.",
            3:  "The robber, Barabbas, is preferred to Jesus.",
            4:  "Pilate can &ldquo;find no cause in Him&rdquo;, yet to appease the Jews, he orders Jesus to be scourged.",
            5:  "The scourge is made of leather thongs to which are attached small sharp bones.",
            6:  "Jesus is bound to a pillar and cruelly scourged until His whole body is covered with deep wounds.",
            7:  "The Lamb of God offers His suffering for the sins of mankind.",
            8:  "Jesus suffers so much in His sacred flesh to satisfy, especially, for sins of the flesh.",
            9:  "The prophecy of Isaiah is fulfilled: &ldquo;He was wounded for our iniquities, He was bruised for our sins.&rdquo;",
            10: "Father, by the merits of Jesus in this painful scourging, have mercy on us and on the whole world."
        },
        3: {
            1:  "Pilate asks, &ldquo;Are You a king?&rdquo; Jesus answers: &ldquo;I am a King, but My kingdom is not of this world.&rdquo;",
            2:  "In the praetorium, the soldiers place an old purple robe on Jesus in mockery of His claim to be a king.",
            3:  "They fashion a crown out of thorns, and forcefully press it down upon His head.",
            4:  "In His bound hands they place a reed, as a sceptre, in mockery of His kingship.",
            5:  "Kneeling before Him in derision, they spit on Him, and cry out: &ldquo;Hail, King of the Jews!&rdquo;",
            6:  "Taking the reed from His hand they strike Him on the head, driving the thorns more deeply into His scalp.",
            7:  "Pilate brings Jesus before the people, hoping His pitiful sight will soften them: &ldquo;Behold the man!&rdquo;",
            8:  "Their response: &ldquo;Crucify Him! Crucify Him!&rdquo;",
            9:  "Our Blessed Lord submitted to this terrible humiliation to make reparation for our pride.",
            10: "Father, by the merits of this painful humiliation, have mercy on us and on the whole world."
        },
        4: {
            1:  "One condemned to death by crucifixion is forced to carry the cross to the place of execution.",
            2:  "The suffering of Jesus is intense as the cross is laid on His bruised and wounded back and shoulders.",
            3:  "Weak and exhausted from loss of blood, lack of food and rest, Jesus falls three times under the cross.",
            4:  "Jesus meets His afflicted Mother causing untold anguish in the Hearts of Son and Mother.",
            5:  "The countenance of Jesus is disfigured with blood and sweat, with dust and spittle.",
            6:  "Veronica wipes His face, leaving on her towel the image of His countenance.",
            7:  "Fearing that Jesus might die on the way, the soldiers force Simon of Cyrene to carry the cross behind Jesus.",
            8:  "Jesus speaks to weeping women: &ldquo;Weep not for Me, but for yourselves and your children.&rdquo;",
            9:  "&ldquo;If anyone is to be My disciple, let him take up his cross and follow Me.&rdquo;",
            10: "Father, by the merits of this painful journey to Calvary, have mercy on us and on the whole world."
        },
        5: {
            1:  "The hands and feet of Jesus are nailed to the cross in the presence of His afflicted Mother.",
            2:  "&ldquo;Father, forgive them for they know not what they do.&rdquo;",
            3:  "&ldquo;This day you will be with Me in paradise.&rdquo;",
            4:  "&ldquo;Woman, behold your son. Son, behold your Mother.&rdquo;",
            5:  "&ldquo;My God, My God, why have You forsaken Me?&rdquo;",
            6:  "&ldquo;I thirst.&rdquo;",
            7:  "&ldquo;It is finished.&rdquo;",
            8:  "&ldquo;Father, into Your hands I commend My spirit.&rdquo;",
            9:  "The side of Jesus is pierced with a lance. His body is taken down and placed in the arms of His Mother.",
            10: "Father, by the merits of the crucifixion and death of Jesus, have mercy on us and on the whole world."
        }
    },
    glorious: {
        1: {
            1:  "The body of Jesus is placed in the tomb on the evening of Good Friday.",
            2:  "His soul descends into the realm of the dead to announce to the Just the tidings of their redemption.",
            3:  "Fearing the body of Jesus will be taken, the chief priests place guards at the tomb.",
            4:  "On the third day Jesus rises from the dead, glorious and immortal.",
            5:  "The earth quakes as the angel rolls back the stone, the guards flee in terror.",
            6:  "The holy women coming to anoint the body of Jesus are amazed and frightened to find the tomb open.",
            7:  "An angel calms their fears: &ldquo;He is not here. He has risen as He said.&rdquo;",
            8:  "Jesus appears to Mary Magdalen and Peter and two disciples on the way to Emmaus.",
            9:  "That evening He appears to the apostles behind locked doors: &ldquo;Peace be unto you… do not be afraid.&rdquo;",
            10: "Jesus breathes on them and gives them the power to forgive sin."
        },
        2: {
            1:  "Jesus remains on earth forty days after His Resurrection to prove He has truly risen from the dead.",
            2:  "He commissions the apostles to preach the gospel to every creature, and promises to be with them forever.",
            3:  "He will not leave them orphans, but will send the Holy Spirit to enlighten and strengthen them.",
            4:  "Jesus proceeds to Mt. Olivet accompanied by His Mother and the apostles and disciples.",
            5:  "Extending His pierced hands over all in a last blessing, He ascends into heaven.",
            6:  "As He ascends a cloud takes Him from their sight.",
            7:  "Jesus ascends to take His place at the right hand of the Father.",
            8:  "What jubilation there must be amid the angels of heaven at the triumphant entry of Jesus.",
            9:  "The wounds in His glorified body are an endless plea before the Father on our behalf.",
            10: "The disciples leave Mt. Olivet and &ldquo;return to Jerusalem with great joy.&rdquo;"
        },
        3: {
            1:  "The apostles are gathered in the upper room where Jesus had held the Last Supper.",
            2:  "They are persevering in prayer with Mary the Mother of Jesus.",
            3:  "A sound comes from heaven like the rush of a mighty wind, and it fills the whole house.",
            4:  "The Holy Spirit descends on each of them in the form of tongues of fire.",
            5:  "Filled with the Gifts of the Holy Spirit, they are enlightened and strengthened to spread the Gospel.",
            6:  "Having lost all fear of the Jewish leaders, the apostles boldly preach Christ crucified.",
            7:  "The multitudes are confounded because every man hears them speak in his own tongue.",
            8:  "The Holy Spirit comes upon the Infant Church never to leave it.",
            9:  "That first day Peter goes forth to preach and baptizes three thousand.",
            10: "The feast of Pentecost is the birthday of the Church, for on that day it begins to grow."
        },
        4: {
            1:  "After the apostles have dispersed, the Blessed Mother goes to live with John, the beloved disciple.",
            2:  "Mary lives many years on earth after the death of Christ.",
            3:  "She is a source of comfort, consolation and strength to the apostles.",
            4:  "As she had nourished the infant Jesus, so she nourishes spiritually the infant Church.",
            5:  "Mary dies, not of bodily infirmity, but is wholly overcome in a rapture of divine love.",
            6:  "Her body as well as her soul is taken up into heaven.",
            7:  "After her burial the apostles go to the tomb and find only fragrant lilies.",
            8:  "Jesus does not permit the sinless body of His Mother to decay in the grave.",
            9:  "Corruption of the body is an effect of original sin from which Mary is totally exempted.",
            10: "The bodies of all mankind, at the last judgment, will be brought back and united again to the soul."
        },
        5: {
            1:  "As Mary enters heaven, the entire court of heaven greets with joy this masterpiece of God’s creation.",
            2:  "Mary is crowned by her divine Son as Queen of heaven and earth.",
            3:  "More than we can ever know the Hearts of Jesus and Mary overflow with joy at this reunion.",
            4:  "Only in heaven will we know the great majesty of that coronation, and the joy it gave to the angels and saints.",
            5:  "Even the angels, who by nature are greater than humans, hail Mary as their Queen.",
            6:  "Mary shares so fully in the glory of Christ because she shared so fully in His suffering.",
            7:  "Only in heaven will we see how central is the role of Mary in the divine plan of redemption.",
            8:  "The angels and saints longed for the coming of her whose heel crushes the head of the serpent.",
            9:  "Mary pleads our cause as a most powerful Queen and a most merciful and loving Mother.",
            10: "A great sign appeared in heaven; a woman clothed with the sun, the moon under her feet, and on her head a crown of twelve stars."
        }
    }
}