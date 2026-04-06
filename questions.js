const db = {
    "Use of English": [
        // SECTION 1: ANTONYMS (Opposite in Meaning)
        { q: "Choose the option opposite in meaning to the italicized word: The manager was *appalled* by the worker's attitude.", options: ["pleased", "shocked", "disgusted", "dismayed"], answer: 0 },
        { q: "Choose the option opposite in meaning: His speech was highly *provocative*.", options: ["annoying", "soothing", "interesting", "boring"], answer: 1 },
        { q: "Choose the option opposite in meaning: The man is known for his *parsimony*.", options: ["generosity", "stinginess", "cruelty", "kindness"], answer: 0 },
        { q: "Choose the option opposite in meaning: She gave a *superficial* account of the incident.", options: ["deep", "shallow", "detailed", "brief"], answer: 2 },
        { q: "Choose the option opposite in meaning: The new policy will *alleviate* poverty.", options: ["aggravate", "reduce", "eradicate", "sustain"], answer: 0 },
        { q: "Choose the option opposite in meaning: His argument was *fallacious*.", options: ["false", "logical", "deceptive", "weak"], answer: 1 },
        { q: "Choose the option opposite in meaning: The team suffered a *humiliating* defeat.", options: ["disgraceful", "glorious", "crushing", "mild"], answer: 1 },
        { q: "Choose the option opposite in meaning: The politician’s promises were *ephemeral*.", options: ["short-lived", "permanent", "unrealistic", "deceitful"], answer: 1 },
        { q: "Choose the option opposite in meaning: She was *reluctant* to join the group.", options: ["unwilling", "eager", "hesitant", "forced"], answer: 1 },
        { q: "Choose the option opposite in meaning: The disease is *endemic* to the region.", options: ["native", "foreign", "widespread", "rare"], answer: 1 },

        // SECTION 2: SYNONYMS (Nearest in Meaning)
        { q: "Choose the option nearest in meaning to the italicized word: The decision was *unanimous*.", options: ["divided", "agreed upon by all", "controversial", "unexpected"], answer: 1 },
        { q: "Choose the option nearest in meaning: His behavior was *bizarre*.", options: ["normal", "strange", "polite", "aggressive"], answer: 1 },
        { q: "Choose the option nearest in meaning: The project proved to be a *futile* exercise.", options: ["useful", "hopeless", "expensive", "successful"], answer: 1 },
        { q: "Choose the option nearest in meaning: She is a *meticulous* worker.", options: ["careless", "lazy", "careful", "fast"], answer: 2 },
        { q: "Choose the option nearest in meaning: The evidence was *corroborated* by a witness.", options: ["confirmed", "denied", "destroyed", "ignored"], answer: 0 },
        { q: "Choose the option nearest in meaning: The dictator was *ruthless*.", options: ["merciful", "pitiless", "weak", "loved"], answer: 1 },
        { q: "Choose the option nearest in meaning: The storm caused *colossal* damage.", options: ["minimal", "massive", "reparable", "sudden"], answer: 1 },
        { q: "Choose the option nearest in meaning: His explanation was *lucid*.", options: ["confusing", "clear", "long", "boring"], answer: 1 },
        { q: "Choose the option nearest in meaning: The boy is *indolent*.", options: ["hardworking", "lazy", "clever", "stubborn"], answer: 1 },
        { q: "Choose the option nearest in meaning: They lived in *destitution*.", options: ["wealth", "poverty", "harmony", "fear"], answer: 1 },

        // SECTION 3: LEXIS AND STRUCTURE (Fill in the blanks)
        { q: "Neither the principal nor the teachers ______ present at the meeting.", options: ["was", "were", "is", "are being"], answer: 1 },
        { q: "If I had known he was coming, I ______ have prepared some food.", options: ["will", "would", "shall", "can"], answer: 1 },
        { q: "The boys congratulated themselves ______ their brilliant performance.", options: ["for", "on", "about", "with"], answer: 1 },
        { q: "She has been waiting here ______ two hours.", options: ["since", "for", "from", "in"], answer: 1 },
        { q: "I look forward to ______ you soon.", options: ["see", "seeing", "seen", "saw"], answer: 1 },
        { q: "He prefers reading ______ sleeping.", options: ["than", "to", "from", "over"], answer: 1 },
        { q: "Hardly had we arrived ______ the rain started.", options: ["than", "when", "that", "before"], answer: 1 },
        { q: "The committee ______ divided on the issue.", options: ["is", "are", "was", "has been"], answer: 1 }, // Committee as individuals
        { q: "She is the ______ of the two sisters.", options: ["tallest", "taller", "tall", "most tall"], answer: 1 },
        { q: "You had better ______ now before it rains.", options: ["left", "leave", "leaving", "to leave"], answer: 1 },
        { q: "The man was accused ______ stealing the money.", options: ["for", "with", "of", "on"], answer: 2 },
        { q: "By this time next year, I ______ my university education.", options: ["will complete", "would complete", "shall have completed", "will be completing"], answer: 2 },
        { q: "The furniture in the room ______ entirely new.", options: ["are", "is", "were", "have been"], answer: 1 },
        { q: "Let the matter remain a secret between you and ______.", options: ["I", "me", "myself", "we"], answer: 1 },
        { q: "He is not used to ______ treated like a child.", options: ["be", "been", "being", "have been"], answer: 2 },
        { q: "The news ______ a shock to everyone.", options: ["were", "was", "are", "have been"], answer: 1 },
        { q: "It is high time we ______ studying for the exams.", options: ["start", "started", "starting", "starts"], answer: 1 },
        { q: "I am confident ______ passing the test.", options: ["of", "in", "about", "for"], answer: 0 },
        { q: "The teacher, along with his students, ______ going on an excursion.", options: ["are", "is", "were", "have been"], answer: 1 },
        { q: "He asked me ______.", options: ["where is the book", "where the book is", "where the book was", "where was the book"], answer: 2 },

        // SECTION 4: IDIOMS & PHRASAL VERBS
        { q: "To 'let the cat out of the bag' means to ______.", options: ["buy a cat", "reveal a secret", "tell a lie", "make a mistake"], answer: 1 },
        { q: "When the manager was caught stealing, he had to 'face the music'. This means he had to ______.", options: ["listen to a song", "accept the consequences", "go to a party", "resign immediately"], answer: 1 },
        { q: "His argument doesn't 'hold water'. This means his argument is ______.", options: ["wet", "invalid", "strong", "heavy"], answer: 1 },
        { q: "She decided to 'throw in the towel' after failing the exam twice. This means she ______.", options: ["tried again", "gave up", "washed her face", "complained"], answer: 1 },
        { q: "The boss asked him to 'keep an eye on' the new employee. This means he should ______.", options: ["stare at him", "monitor him", "ignore him", "report him"], answer: 1 },
        { q: "We need to 'iron out' our differences before the project starts. This means to ______.", options: ["press our clothes", "resolve our issues", "fight it out", "ignore the problems"], answer: 1 },
        { q: "He passed the examination 'with flying colours'. This means he ______.", options: ["painted his paper", "failed woefully", "passed excellently", "cheated"], answer: 2 },
        { q: "The new rule is a 'bone of contention' among the staff. This means it is a subject of ______.", options: ["agreement", "dispute", "joy", "laughter"], answer: 1 },
        { q: "He was advised to 'turn over a new leaf'. This means to ______.", options: ["read a new book", "change his bad behavior", "plant a tree", "clean his room"], answer: 1 },
        { q: "They were told to 'nip the problem in the bud'. This means to ______.", options: ["stop it early", "let it grow", "cut a flower", "ignore it completely"], answer: 0 },

        // SECTION 5: ORAL ENGLISH (Sounds, Stress, Rhymes)
        { q: "Identify the word that has the same vowel sound as 'CUP'.", options: ["pull", "blood", "bull", "full"], answer: 1 },
        { q: "Identify the word that has the same consonant sound as the underlined letter(s) in 'THick'.", options: ["there", "weather", "breath", "breathe"], answer: 2 },
        { q: "Which of the following words has the stress on the FIRST syllable?", options: ["important", "education", "photograph", "understand"], answer: 2 },
        { q: "Identify the word that rhymes with 'GREAT'.", options: ["meat", "weight", "greet", "seat"], answer: 1 },
        { q: "Identify the word that has the same vowel sound as 'KEY'.", options: ["quay", "kite", "play", "cry"], answer: 0 },
        { q: "Identify the word with the same consonant sound as the underlined letter in 'viSion'.", options: ["measure", "mission", "machine", "ocean"], answer: 0 },
        { q: "Which of these words is stressed on the SECOND syllable?", options: ["democracy", "democratic", "demonstrate", "democrat"], answer: 0 },
        { q: "Identify the word that has the same vowel sound as 'BIRD'.", options: ["beard", "board", "word", "bed"], answer: 2 },
        { q: "Identify the word with the same consonant sound as the underlined letter(s) in 'CHurch'.", options: ["machine", "chemistry", "feature", "champagne"], answer: 2 },
        { q: "Identify the word that rhymes with 'FEAR'.", options: ["bear", "pear", "deer", "hair"], answer: 2 }
    ],
    "Mathematics": [
        // NUMBER BASES & FRACTIONS
        { q: "Evaluate $212_3 - 121_3 + 222_3$", options: ["$313_3$", "$1000_3$", "$1020_3$", "$1222_3$"], answer: 1 },
        { q: "Convert $72_{10}$ to a number in base 5.", options: ["242", "212", "422", "224"], answer: 0 },
        { q: "If $x_{10} = 121_4$, find $x$.", options: ["20", "25", "27", "30"], answer: 1 },
        { q: "Simplify: $\\frac{3\\frac{1}{2} + 4\\frac{1}{3}}{2\\frac{1}{6}}$", options: ["$3\\frac{1}{2}$", "$3\\frac{8}{13}$", "$4\\frac{1}{2}$", "3"], answer: 1 },
        { q: "A man donated 10% of his salary to charity and spent 30% of the remainder on food. What percentage of his salary was left?", options: ["60%", "63%", "70%", "50%"], answer: 1 },

        // INDICES, LOGARITHMS & SURDS
        { q: "Solve for $x$: $3^{2x - 1} = 27$.", options: ["1", "2", "3", "4"], answer: 1 },
        { q: "If $\\log_x(81) = 4$, find $x$.", options: ["2", "3", "4", "9"], answer: 1 },
        { q: "Simplify $\\frac{\\sqrt{12} - \\sqrt{3}}{\\sqrt{12} + \\sqrt{3}}$", options: ["1/3", "1/2", "1/4", "3"], answer: 0 },
        { q: "Evaluate $\\log_{10}(2) + \\log_{10}(5)$.", options: ["1", "2", "10", "0"], answer: 0 },
        { q: "If $8^x = \\frac{1}{2}$, find $x$.", options: ["1/3", "-1/3", "3", "-3"], answer: 1 },

        // SETS & VENN DIAGRAMS
        { q: "If $A = \\{2, 4, 6, 8\\}$ and $B = \\{2, 3, 4, 5\\}$, find $A \\cap B$.", options: ["{2, 4, 6}", "{2, 4}", "{2, 3, 4}", "{6, 8}"], answer: 1 },
        { q: "In a class of 40 students, 25 play football and 20 play tennis. If 8 play neither, how many play both?", options: ["13", "10", "15", "12"], answer: 0 },
        { q: "If $P = \\{x : x \\text{ is a prime number } < 10\\}$, list the elements of $P$.", options: ["{1, 2, 3, 5, 7}", "{2, 3, 5, 7}", "{3, 5, 7, 9}", "{2, 3, 5, 7, 9}"], answer: 1 },
        { q: "Which of the following is a null set?", options: ["{0}", "{ }", "{x : x = x}", "{x : x < 0 and x > 0}"], answer: 3 },
        { q: "If the universal set $U = \\{1, 2, 3, 4, 5\\}$ and $A = \\{1, 3, 5\\}$, find the complement of $A$.", options: ["{2, 4}", "{1, 2, 3, 4, 5}", "{1, 3}", "{ }"], answer: 0 },

        // ALGEBRA & POLYNOMIALS
        { q: "Make $U$ the subject of the formula: $E = \\frac{m}{2}(v^2 - U^2)$", options: ["$U = \\sqrt{\\frac{2E}{m} - v^2}$", "$U = \\sqrt{v^2 - \\frac{2E}{m}}$", "$U = \\sqrt{\\frac{2E}{m} + v^2}$", "$U = v^2 - \\frac{2E}{m}$"], answer: 1 },
        { q: "Solve for $x$: $2x - 4 = 10$", options: ["7", "6", "5", "8"], answer: 0 },
        { q: "The sum of the roots of a quadratic equation is 5 and the product is 6. Find the equation.", options: ["$x^2 + 5x + 6 = 0$", "$x^2 - 5x + 6 = 0$", "$x^2 - 5x - 6 = 0$", "$x^2 + 5x - 6 = 0$"], answer: 1 },
        { q: "Solve the inequality: $3x - 5 < 5x + 3$", options: ["$x > -4$", "$x < -4$", "$x > 4$", "$x < 4$"], answer: 0 },
        { q: "Find the remainder when $x^3 - 2x^2 + 3x - 4$ is divided by $x - 1$.", options: ["-2", "-1", "0", "1"], answer: 0 },

        // SEQUENCE & SERIES
        { q: "Find the sum to infinity of the geometric progression: 1, 1/3, 1/9, 1/27, ...", options: ["3/2", "2/3", "4/3", "3"], answer: 0 },
        { q: "Find the nth term of the sequence 2, 5, 10, 17...", options: ["$n^2 - 1$", "$n^2 + 1$", "$2n + 1$", "$n^2 + 2$"], answer: 1 },
        { q: "The 3rd term of an A.P is 10 and the 6th term is 22. Find the common difference.", options: ["3", "4", "5", "6"], answer: 1 },
        { q: "What is the sum of the first 10 terms of the A.P: 2, 4, 6, 8...?", options: ["110", "100", "120", "90"], answer: 0 },
        { q: "If the 2nd term of a G.P is 6 and the 4th term is 54, find the common ratio (assuming it is positive).", options: ["2", "3", "4", "5"], answer: 1 },

        // MATRICES & DETERMINANTS
        { q: "Find the determinant of the matrix: $\\begin{pmatrix} 3 & -2 \\\\ 4 & 5 \\end{pmatrix}$", options: ["7", "23", "15", "-8"], answer: 1 },
        { q: "A matrix has no inverse if its determinant is:", options: ["1", "-1", "0", "infinity"], answer: 2 },
        { q: "If $\\begin{pmatrix} x & 2 \\\\ 3 & 4 \\end{pmatrix}$ has a determinant of 10, find $x$.", options: ["4", "5", "6", "7"], answer: 0 },
        { q: "Which of the following matrices is an identity matrix?", options: ["$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$"], answer: 2 },
        { q: "Transpose the matrix $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$.", options: ["$\\begin{pmatrix} 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & -2 \\\\ -3 & -4 \\end{pmatrix}$"], answer: 1 },

        // GEOMETRY & MENSURATION
        { q: "What is the sum of the interior angles of an octagon?", options: ["720°", "900°", "1080°", "1260°"], answer: 2 },
        { q: "A regular polygon has an exterior angle of 40°. How many sides does it have?", options: ["8", "9", "10", "12"], answer: 1 },
        { q: "The angle of a sector of a circle of radius 7cm is 72°. Find the area of the sector. (Take $\\pi = 22/7$)", options: ["15.4 cm²", "30.8 cm²", "7.7 cm²", "22.0 cm²"], answer: 1 },
        { q: "A cylinder has a base radius of 3cm and a height of 14cm. Calculate its volume.", options: ["396 cm³", "198 cm³", "294 cm³", "132 cm³"], answer: 0 },
        { q: "What is the locus of a point equidistant from two intersecting straight lines?", options: ["A circle", "The angle bisector", "A parallel line", "A perpendicular bisector"], answer: 1 },

        // COORDINATE GEOMETRY
        { q: "Find the distance between the points (3, 4) and (-2, -8).", options: ["12", "13", "14", "15"], answer: 1 },
        { q: "Find the equation of a line parallel to $y = 2x + 5$ passing through the point (1, 4).", options: ["$y = 2x - 2$", "$y = 2x + 2$", "$y = -2x + 6$", "$y = 2x + 4$"], answer: 1 },
        { q: "What is the gradient of the line joining (2, 3) and (5, 9)?", options: ["2", "3", "1/2", "-2"], answer: 0 },
        { q: "Find the midpoint of the line segment joining (-2, 4) and (6, 8).", options: ["(2, 6)", "(4, 6)", "(2, 12)", "(4, 4)"], answer: 0 },
        { q: "Two lines are perpendicular if the product of their gradients is:", options: ["1", "0", "-1", "infinity"], answer: 2 },

        // TRIGONOMETRY
        { q: "If $\\tan(\\theta) = 3/4$ and $\\theta$ is acute, find $\\cos(\\theta)$.", options: ["3/5", "4/5", "5/4", "5/3"], answer: 1 },
        { q: "Evaluate $\\sin(30°) + \\cos(60°)$.", options: ["1", "1/2", "0", "2"], answer: 0 },
        { q: "The bearing of point A from point B is 065°. What is the bearing of B from A?", options: ["115°", "245°", "295°", "065°"], answer: 1 },
        { q: "A ladder 10m long leans against a vertical wall making an angle of 60° with the ground. How high up the wall does it reach?", options: ["5m", "$5\\sqrt{2}$m", "$5\\sqrt{3}$m", "10m"], answer: 2 },
        { q: "Convert $120°$ to radians.", options: ["$\\pi/3$", "$2\\pi/3$", "$\\pi/2$", "$3\\pi/4$"], answer: 1 },

        // CALCULUS
        { q: "If $y = 3\\cos(4x)$, find $\\frac{dy}{dx}$.", options: ["$-12\\sin(4x)$", "$12\\sin(4x)$", "$-12\\cos(4x)$", "$12\\cos(4x)$"], answer: 0 },
        { q: "Evaluate $\\int_{0}^{2} (3x^2 - 2x) dx$", options: ["4", "5", "6", "8"], answer: 0 },
        { q: "Find the maximum value of $y = 5 - 2x - x^2$.", options: ["5", "6", "7", "8"], answer: 1 },
        { q: "Find the gradient of the curve $y = x^2 - 3x$ at the point $x = 2$.", options: ["-1", "0", "1", "2"], answer: 2 },
        { q: "Evaluate the limit as $x$ approaches 2 for $\\frac{x^2 - 4}{x - 2}$.", options: ["0", "2", "4", "infinity"], answer: 2 },
        // COMMERCIAL MATHEMATICS
        { q: "Find the simple interest on ₦8,000 for 4 years at 5% per annum.", options: ["₦1,600", "₦1,200", "₦1,500", "₦2,000"], answer: 0 },
        { q: "A TV set was sold for ₦45,000 at a loss of 10%. What was the cost price?", options: ["₦55,000", "₦50,000", "₦49,500", "₦40,500"], answer: 1 },
        { q: "A man buys a car for ₦1,200,000. It depreciates by 15% in the first year. Find its value after one year.", options: ["₦1,020,000", "₦1,000,000", "₦1,185,000", "₦900,000"], answer: 0 },
        { q: "Convert ₦2,500 to dollars if the exchange rate is $1 = ₦500.", options: ["$50", "$5", "$25", "$10"], answer: 1 },
        { q: "A trader gives a 5% discount for cash payment. How much will a buyer pay for goods marked ₦6,000?", options: ["₦5,700", "₦5,500", "₦6,300", "₦5,950"], answer: 0 },

        // STATISTICS
        { q: "Find the mean of 2, 4, 5, 8, and 11.", options: ["4", "5", "6", "7"], answer: 2 },
        { q: "The scores of 5 students are 4, 5, 7, $x$, and 9. If the mean is 6, find $x$.", options: ["4", "5", "6", "7"], answer: 1 },
        { q: "Find the median of the data: 12, 15, 9, 7, 18, 14, 20.", options: ["12", "14", "15", "18"], answer: 1 },
        { q: "What is the mode of the numbers 3, 4, 4, 5, 6, 4, 7, 5?", options: ["3", "4", "5", "6"], answer: 1 },
        { q: "Find the range of the distribution: 2, 8, 15, 3, 21, 6.", options: ["13", "18", "19", "21"], answer: 2 },
        { q: "Calculate the variance of 1, 2, 3, 4, 5.", options: ["2", "2.5", "3", "1.5"], answer: 0 },
        { q: "The standard deviation of a set of scores is 4. What is the variance?", options: ["2", "8", "16", "12"], answer: 2 },

        // PROBABILITY
        { q: "A fair die is tossed once. What is the probability of getting an even number?", options: ["1/6", "1/3", "1/2", "2/3"], answer: 2 },
        { q: "Two fair coins are tossed. Find the probability of obtaining at least one head.", options: ["1/4", "1/2", "3/4", "1"], answer: 2 },
        { q: "A bag contains 4 red, 3 blue and 5 green balls. What is the probability of picking a blue ball?", options: ["1/4", "1/3", "5/12", "1/2"], answer: 0 },
        { q: "If the probability of passing an exam is 0.7, what is the probability of failing?", options: ["0.2", "0.3", "0.4", "0.5"], answer: 1 },
        { q: "A number is chosen at random from 1 to 10. Find the probability that it is a prime number.", options: ["2/5", "1/2", "3/5", "7/10"], answer: 0 },

        // ALGEBRA & EQUATIONS
        { q: "Solve the simultaneous equations: $x + y = 5$, $x - y = 1$", options: ["x=2, y=3", "x=3, y=2", "x=4, y=1", "x=1, y=4"], answer: 1 },
        { q: "Find the values of $x$ for which $x^2 - 5x + 6 = 0$.", options: ["2, 3", "-2, -3", "1, 6", "-1, -6"], answer: 0 },
        { q: "If $a = 2, b = -1, c = 3$, evaluate $(a^2 - b^2) / c$.", options: ["1", "2", "3", "4"], answer: 0 },
        { q: "Solve the inequality $2x - 3 \\leq 5$.", options: ["x <= 2", "x <= 3", "x <= 4", "x <= 8"], answer: 2 },
        { q: "Factorize completely: $3x^2 - 12$.", options: ["3(x-2)(x+2)", "3(x-4)(x+4)", "3x(x-4)", "(3x-2)(x+2)"], answer: 0 },
        { q: "Express $\\frac{2}{x-1} - \\frac{1}{x+2}$ as a single fraction.", options: ["(x+5)/((x-1)(x+2))", "(x-5)/((x-1)(x+2))", "(x+3)/((x-1)(x+2))", "(3x+3)/((x-1)(x+2))"], answer: 0 },
        { q: "If $f(x) = x^2 + 2x - 1$, find $f(2)$.", options: ["3", "5", "7", "9"], answer: 2 },
        { q: "Find the roots of the equation $2x^2 + 5x - 3 = 0$.", options: ["1/2, -3", "-1/2, 3", "2, -3/2", "-2, 3/2"], answer: 0 },

        // INDICES & LOGARITHMS
        { q: "Simplify $2^3 \\times 2^{-1} \\times 2^2$.", options: ["2^4", "2^5", "2^6", "16"], answer: 3 },
        { q: "Evaluate $\\log_2 8 + \\log_3 9$.", options: ["5", "6", "7", "8"], answer: 0 },
        { q: "Solve for $y$: $\\log_{10}(2y - 1) = 1$.", options: ["4.5", "5.5", "6", "11"], answer: 1 },
        { q: "Simplify $\\frac{x^4 \\times x^3}{x^5}$.", options: ["x^12", "x^7", "x^2", "x"], answer: 2 },

        // GEOMETRY & TRIGONOMETRY
        { q: "A triangle has sides 3cm, 4cm, and 5cm. What type of triangle is it?", options: ["Isosceles", "Equilateral", "Right-angled", "Scalene"], answer: 2 },
        { q: "Find the area of a circle with diameter 14cm. (Take $\\pi=22/7$)", options: ["154 cm^2", "44 cm^2", "308 cm^2", "616 cm^2"], answer: 0 },
        { q: "The angle of elevation of the top of a tree from a point 10m away from its base is 45°. Find the height of the tree.", options: ["10m", "5m", "10\\sqrt{2}m", "20m"], answer: 0 },
        { q: "If $\\sin\\theta = 0.5$, find $\\theta$ for $0^\\circ \\leq \\theta \\leq 90^\\circ$.", options: ["30°", "45°", "60°", "90°"], answer: 0 },
        { q: "Calculate the perimeter of a rectangle with length 8cm and breadth 5cm.", options: ["13cm", "26cm", "40cm", "20cm"], answer: 1 },
        { q: "Find the volume of a cube of side 4cm.", options: ["16 cm^3", "32 cm^3", "64 cm^3", "128 cm^3"], answer: 2 },
        { q: "What is the size of each interior angle of a regular hexagon?", options: ["120°", "108°", "135°", "144°"], answer: 0 },
        { q: "Convert $60^\\circ$ to radians.", options: ["$\\pi/2$", "$\\pi/3$", "$\\pi/4$", "$\\pi/6$"], answer: 1 },
        { q: "Find the length of an arc of a circle of radius 7cm subtending an angle of 90° at the center. (Take $\\pi=22/7$)", options: ["11cm", "22cm", "44cm", "154cm"], answer: 0 },

        // COORDINATE GEOMETRY
        { q: "Find the gradient of the line passing through (1, 2) and (-3, -6).", options: ["2", "1/2", "-2", "-1/2"], answer: 0 },
        { q: "Find the y-intercept of the line $3x - 2y = 6$.", options: ["2", "-3", "3", "-2"], answer: 1 },
        { q: "Find the equation of the line passing through (0, 0) with a gradient of 3.", options: ["y = x + 3", "y = 3x", "y = 3x + 1", "y = -3x"], answer: 1 },
        { q: "Find the distance from the origin to the point (3, 4).", options: ["5", "7", "12", "25"], answer: 0 },

        // CALCULUS
        { q: "Differentiate $y = 3x^4 - 2x^2 + 5$ with respect to x.", options: ["12x^3 - 4x", "12x^3 - 4", "4x^3 - 2x", "12x^4 - 4x^2"], answer: 0 },
        { q: "Find $\\int (2x + 1) dx$.", options: ["x^2 + x + C", "2x^2 + x + C", "x^2 + C", "x^2 + 1 + C"], answer: 0 },
        { q: "Evaluate $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$.", options: ["0", "3", "6", "infinity"], answer: 2 },
        { q: "If $y = \\sin(2x)$, find $\\frac{dy}{dx}$.", options: ["\\cos(2x)", "2\\cos(2x)", "-2\\cos(2x)", "-2\\sin(2x)"], answer: 1 },
        { q: "Find the turning point of $y = x^2 - 4x + 3$.", options: ["(2, -1)", "(-2, 15)", "(2, 1)", "(4, 3)"], answer: 0 },

        // MATRICES
        { q: "If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 1 \\end{pmatrix}$, find $A + B$.", options: ["$\\begin{pmatrix} 3 & 2 \\\\ 4 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 0 \\\\ 3 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 2 \\\\ 2 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & 2 \\\\ 2 & 3 \\end{pmatrix}$"], answer: 0 },
        { q: "If $M = \\begin{pmatrix} 2 & -1 \\\\ 3 & 1 \\end{pmatrix}$, find the determinant of $M$.", options: ["5", "-1", "1", "4"], answer: 0 },
        { q: "Find $2A$ if $A = \\begin{pmatrix} 1 & 0 \\\\ -2 & 3 \\end{pmatrix}$.", options: ["$\\begin{pmatrix} 2 & 0 \\\\ -4 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 2 \\\\ -4 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 0 \\\\ -4 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 0 \\\\ -2 & 3 \\end{pmatrix}$"], answer: 0 }
    ],
    "Biology": [
        // CELLS & ORGANISMS
        { q: "The organelle responsible for hereditary transmission is the:", options: ["Ribosome", "Mitochondrion", "Nucleus", "Lysosome"], answer: 2 },
        { q: "Which of the following organisms is unicellular?", options: ["Spirogyra", "Amoeba", "Earthworm", "Hydra"], answer: 1 },
        { q: "The process by which water moves from a region of lower concentration to higher concentration through a semi-permeable membrane is:", options: ["Diffusion", "Osmosis", "Active transport", "Plasmolysis"], answer: 1 },
        { q: "Which of these is NOT found in a plant cell?", options: ["Chloroplast", "Cell wall", "Centriole", "Large vacuole"], answer: 2 },
        { q: "The site for protein synthesis in a cell is the:", options: ["Nucleus", "Ribosome", "Golgi body", "Smooth ER"], answer: 1 },
        { q: "Which of the following possesses both plant and animal characteristics?", options: ["Paramecium", "Euglena", "Amoeba", "Spirogyra"], answer: 1 },
        { q: "Turgor pressure in plant cells is mainly responsible for:", options: ["Photosynthesis", "Support", "Respiration", "Reproduction"], answer: 1 },
        { q: "The energy currency of the cell is:", options: ["DNA", "RNA", "ATP", "ADP"], answer: 2 },
        { q: "Viruses are considered to be living organisms because they:", options: ["Can respire", "Can reproduce in a host", "Have a cell wall", "Can feed"], answer: 1 },
        { q: "The engulfing of solid particles by a cell is called:", options: ["Pinocytosis", "Phagocytosis", "Exocytosis", "Osmosis"], answer: 1 },

        // NUTRITION & DIGESTION
        { q: "The enzyme that acts on milk protein in the stomach is:", options: ["Pepsin", "Ptyalin", "Renin", "Lipase"], answer: 2 },
        { q: "A deficiency of Vitamin C causes:", options: ["Rickets", "Scurvy", "Beri-beri", "Pellagra"], answer: 1 },
        { q: "Which of the following is a trace element in plants?", options: ["Magnesium", "Nitrogen", "Zinc", "Phosphorus"], answer: 2 },
        { q: "The end product of protein digestion is:", options: ["Glucose", "Fatty acids", "Amino acids", "Glycerol"], answer: 2 },
        { q: "Bile is produced in the:", options: ["Gall bladder", "Pancreas", "Liver", "Stomach"], answer: 2 },
        { q: "The dental formula $i\\frac{2}{2}, c\\frac{1}{1}, pm\\frac{2}{2}, m\\frac{3}{3}$ belongs to:", options: ["Dog", "Rat", "Man", "Sheep"], answer: 2 },
        { q: "Which of these pairs of organs are involved in the digestion of fats?", options: ["Liver and Pancreas", "Stomach and Liver", "Pancreas and Stomach", "Mouth and Stomach"], answer: 0 },
        { q: "Autotrophic nutrition is exhibited by:", options: ["Fungi", "Algae", "Viruses", "Tapeworms"], answer: 1 },
        { q: "Iodine solution is used to test for the presence of:", options: ["Proteins", "Lipids", "Starch", "Glucose"], answer: 2 },
        { q: "Which part of the mammalian gut absorbs the most water?", options: ["Stomach", "Duodenum", "Ileum", "Colon"], answer: 3 },

        // RESPIRATION & TRANSPORT
        { q: "The respiratory organ of an insect is the:", options: ["Lung", "Gills", "Trachea", "Skin"], answer: 2 },
        { q: "Which blood vessel carries oxygenated blood to the liver?", options: ["Hepatic portal vein", "Hepatic artery", "Hepatic vein", "Renal artery"], answer: 1 },
        { q: "Anaerobic respiration in yeast produces:", options: ["Lactic acid and CO2", "Ethanol and CO2", "Water and CO2", "Glucose and O2"], answer: 1 },
        { q: "The chamber of the mammalian heart with the thickest wall is the:", options: ["Right auricle", "Left auricle", "Right ventricle", "Left ventricle"], answer: 3 },
        { q: "Erythrocytes are also known as:", options: ["White blood cells", "Red blood cells", "Platelets", "Plasma"], answer: 1 },
        { q: "The stomata in plants are mainly used for:", options: ["Photosynthesis", "Gaseous exchange", "Water absorption", "Food storage"], answer: 1 },
        { q: "Which vitamin is essential for blood clotting?", options: ["Vitamin A", "Vitamin K", "Vitamin C", "Vitamin D"], answer: 1 },
        { q: "The universal blood donor belongs to blood group:", options: ["A", "B", "AB", "O"], answer: 3 },
        { q: "Lenticels are found in the:", options: ["Leaves", "Roots", "Stems", "Flowers"], answer: 2 },
        { q: "The instrument used to measure the rate of transpiration is the:", options: ["Anemometer", "Photometer", "Potometer", "Hygrometer"], answer: 2 },

        // EXCRETION & COORDINATION
        { q: "The functional unit of the mammalian kidney is the:", options: ["Ureter", "Urethra", "Nephron", "Glomerulus"], answer: 2 },
        { q: "Which of the following is an excretory product in plants?", options: ["Urea", "Uric acid", "Tannin", "Ammonia"], answer: 2 },
        { q: "The part of the brain responsible for maintaining balance and posture is the:", options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"], answer: 1 },
        { q: "A reflex action is controlled by the:", options: ["Brain only", "Spinal cord", "Motor nerves only", "Sensory nerves only"], answer: 1 },
        { q: "The hormone that regulates blood sugar level is:", options: ["Adrenaline", "Thyroxine", "Insulin", "Testosterone"], answer: 2 },
        { q: "The eye defect caused by an uneven curvature of the cornea is:", options: ["Myopia", "Hypermetropia", "Astigmatism", "Presbyopia"], answer: 2 },
        { q: "Which structure connects a bone to another bone?", options: ["Tendon", "Ligament", "Cartilage", "Muscle"], answer: 1 },
        { q: "The longest bone in the human body is the:", options: ["Humerus", "Tibia", "Femur", "Fibula"], answer: 2 },
        { q: "Which gland is known as the 'master gland'?", options: ["Thyroid", "Adrenal", "Pituitary", "Pancreas"], answer: 2 },
        { q: "Urine is temporarily stored in the:", options: ["Kidney", "Ureter", "Urinary bladder", "Urethra"], answer: 2 },

        // ECOLOGY & ADAPTATION
        { q: "The feeding relationship in an ecosystem showing a linear transfer of energy is a:", options: ["Food web", "Food chain", "Trophic level", "Biomass"], answer: 1 },
        { q: "An organism that feeds on both plants and animals is an:", options: ["Herbivore", "Carnivore", "Omnivore", "Autotroph"], answer: 2 },
        { q: "The ultimate source of energy in an ecosystem is:", options: ["Plants", "Water", "The Sun", "Soil"], answer: 2 },
        { q: "A symbiotic relationship where both organisms benefit is called:", options: ["Parasitism", "Commensalism", "Mutualism", "Saprophytism"], answer: 2 },
        { q: "The instrument used to measure wind speed is the:", options: ["Wind vane", "Anemometer", "Barometer", "Rain gauge"], answer: 1 },
        { q: "The natural home of an organism is its:", options: ["Niche", "Habitat", "Ecosystem", "Biome"], answer: 1 },
        { q: "Pneumatophores are an adaptation for breathing in:", options: ["Deserts", "Mangrove swamps", "Savannahs", "Tropical rainforests"], answer: 1 },
        { q: "Which of the following is an abiotic component of an ecosystem?", options: ["Fungi", "Bacteria", "Temperature", "Herbivores"], answer: 2 },
        { q: "The study of the relationship between organisms and their environment is:", options: ["Anatomy", "Ecology", "Genetics", "Taxonomy"], answer: 1 },
        { q: "A group of individuals of the same species living in a particular area is a:", options: ["Community", "Population", "Biome", "Niche"], answer: 1 },

        // GENETICS & REPRODUCTION
        { q: "The father of modern genetics is:", options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Robert Hooke"], answer: 1 },
        { q: "An individual with two different alleles for a trait is:", options: ["Homozygous", "Heterozygous", "Recessive", "Dominant"], answer: 1 },
        { q: "The observable physical characteristics of an organism form its:", options: ["Genotype", "Phenotype", "Karyotype", "Chromotype"], answer: 1 },
        { q: "In humans, the sex of a child is determined by the:", options: ["Mother", "Father", "Both parents", "Environment"], answer: 1 },
        { q: "Which of the following is a continuous variation?", options: ["Blood group", "Ability to roll tongue", "Height", "Fingerprint"], answer: 2 },
        { q: "The fusion of male and female gametes outside the body is called:", options: ["Internal fertilization", "External fertilization", "Copulation", "Ovulation"], answer: 1 },
        { q: "The part of the flower that receives pollen grains is the:", options: ["Anther", "Filament", "Stigma", "Style"], answer: 2 },
        { q: "A sudden, inheritable change in the genetic material is a:", options: ["Variation", "Mutation", "Adaptation", "Evolution"], answer: 1 },
        { q: "Which blood group is the universal recipient?", options: ["A", "B", "AB", "O"], answer: 2 },
        { q: "The structure that protects the developing embryo in mammals is the:", options: ["Placenta", "Amnion", "Umbilical cord", "Uterus"], answer: 1 }
    ],
    "Chemistry": [
        // ATOMIC STRUCTURE & PERIODIC TABLE
        { q: "The discovery of the electron is attributed to:", options: ["Ernest Rutherford", "J.J. Thomson", "John Dalton", "Niels Bohr"], answer: 1 },
        { q: "An element with atomic number 17 belongs to which group in the periodic table?", options: ["Group I", "Group V", "Group VII", "Group 0"], answer: 2 },
        { q: "Isotopes are atoms of the same element with the same atomic number but different:", options: ["Number of protons", "Mass number", "Number of electrons", "Chemical properties"], answer: 1 },
        { q: "The shape of a s-orbital is:", options: ["Dumbbell", "Spherical", "Planar", "Circular"], answer: 1 },
        { q: "Which of the following is a noble gas?", options: ["Chlorine", "Neon", "Oxygen", "Nitrogen"], answer: 1 },
        { q: "The maximum number of electrons that can be accommodated in the 'M' shell is:", options: ["2", "8", "18", "32"], answer: 2 },
        { q: "Which of the following elements has the highest electronegativity?", options: ["Chlorine", "Fluorine", "Oxygen", "Nitrogen"], answer: 1 },
        { q: "The vertical columns in the periodic table are called:", options: ["Periods", "Groups", "Series", "Rows"], answer: 1 },
        { q: "An atom that has lost or gained electrons is called an:", options: ["Isotope", "Ion", "Isomer", "Allotrope"], answer: 1 },
        { q: "The radioactive isotope of hydrogen is:", options: ["Protium", "Deuterium", "Tritium", "Heavy water"], answer: 2 },

        // CHEMICAL BONDING & STOICHIOMETRY
        { q: "The bond formed by the sharing of electrons between two atoms is:", options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"], answer: 1 },
        { q: "Which of the following molecules has a linear shape?", options: ["$H_2O$", "$CH_4$", "$CO_2$", "$NH_3$"], answer: 2 },
        { q: "The molar mass of $CaCO_3$ is: (Ca=40, C=12, O=16)", options: ["68 g/mol", "84 g/mol", "100 g/mol", "106 g/mol"], answer: 2 },
        { q: "How many moles are present in 10g of Sodium Hydroxide (NaOH)? (Na=23, O=16, H=1)", options: ["0.25 moles", "0.40 moles", "0.50 moles", "2.5 moles"], answer: 0 },
        { q: "The empirical formula of a compound with molecular formula $C_6H_{12}O_6$ is:", options: ["$CH_2O$", "$CHO$", "$C_2H_4O_2$", "$C_3H_6O_3$"], answer: 0 },
        { q: "Avogadro's constant is approximately:", options: ["$6.02 \times 10^{23}$", "$3.01 \times 10^{23}$", "$6.02 \times 10^{22}$", "$1.66 \times 10^{-24}$"], answer: 0 },
        { q: "The type of bond in Sodium Chloride is:", options: ["Covalent", "Dative", "Electrovalent", "Metallic"], answer: 2 },
        { q: "Which of the following is a polar molecule?", options: ["$O_2$", "$Cl_2$", "$HCl$", "$CH_4$"], answer: 2 },
        { q: "The percentage of oxygen in $KClO_3$ is: (K=39, Cl=35.5, O=16)", options: ["39.2%", "40.1%", "46.7%", "13.1%"], answer: 0 },
        { q: "Standard Temperature and Pressure (STP) values are:", options: ["273 K and 760 mmHg", "0 K and 1 atm", "298 K and 1 atm", "373 K and 760 mmHg"], answer: 0 },

        // STATES OF MATTER & GAS LAWS
        { q: "Boyle's Law states that at constant temperature, volume is inversely proportional to:", options: ["Mass", "Pressure", "Density", "Number of moles"], answer: 1 },
        { q: "The change of state from solid directly to gas is called:", options: ["Evaporation", "Condensation", "Sublimation", "Fusion"], answer: 2 },
        { q: "Which of the following gases is the lightest?", options: ["Oxygen", "Nitrogen", "Hydrogen", "Helium"], answer: 2 },
        { q: "The movement of gas molecules from a region of higher concentration to lower concentration is:", options: ["Effusion", "Diffusion", "Osmosis", "Evaporation"], answer: 1 },
        { q: "According to Charles's Law, volume is directly proportional to:", options: ["Pressure", "Absolute temperature", "Density", "Celsius temperature"], answer: 1 },
        { q: "Ideal gas equation is represented as:", options: ["PV = RT", "PV = nRT", "P/V = nRT", "V/P = nRT"], answer: 1 },
        { q: "The kinetic theory of gases assumes that collisions between molecules are:", options: ["Inelastic", "Perfectly elastic", "Random", "Static"], answer: 1 },
        { q: "Which state of matter has the highest kinetic energy?", options: ["Solid", "Liquid", "Gas", "Plasma"], answer: 2 },
        { q: "The temperature at which the vapor pressure of a liquid equals the atmospheric pressure is the:", options: ["Melting point", "Freezing point", "Boiling point", "Critical point"], answer: 2 },
        { q: "A real gas deviates from ideal behavior at:", options: ["High temp and low pressure", "Low temp and high pressure", "High temp and high pressure", "Low temp and low pressure"], answer: 1 },

        // ACIDS, BASES & SALTS
        { q: "A solution with a pH of 3 is:", options: ["Strongly alkaline", "Weakly acidic", "Strongly acidic", "Neutral"], answer: 2 },
        { q: "Which of the following is a trioxonitrate (V) acid?", options: ["$HNO_2$", "$HNO_3$", "$H_2SO_4$", "$HCl$"], answer: 1 },
        { q: "The reaction between an acid and a base to produce salt and water only is:", options: ["Hydrolysis", "Neutralization", "Saponification", "Esterification"], answer: 1 },
        { q: "Methyl orange indicator turns what color in an acidic medium?", options: ["Yellow", "Red", "Pink", "Colorless"], answer: 1 },
        { q: "Which of the following is an example of an acid salt?", options: ["$NaCl$", "$Na_2CO_3$", "$NaHCO_3$", "$CH_3COONa$"], answer: 2 },
        { q: "The substance that turns red litmus paper blue is a:", options: ["Acid", "Base", "Salt", "Oxidizing agent"], answer: 1 },
        { q: "Deliquescent substances are those that:", options: ["Lose water of crystallization", "Absorb moisture to form a solution", "React with air", "Change color in air"], answer: 1 },
        { q: "An example of a strong base is:", options: ["$NH_3$", "$Mg(OH)_2$", "$NaOH$", "$Al(OH)_3$"], answer: 2 },
        { q: "The concentration of $H^+$ ions in a neutral solution at 25°C is:", options: ["$10^{-7}$ mol/dm³", "$10^{-14}$ mol/dm³", "$10^7$ mol/dm³", "7 mol/dm³"], answer: 0 },
        { q: "Which of these is used to neutralize an acidic stomach?", options: ["Vinegar", "Magnesium hydroxide", "Citric acid", "Battery acid"], answer: 1 },

        // REDOX & ELECTROCHEMISTRY
        { q: "Oxidation is defined as the:", options: ["Gain of electrons", "Loss of electrons", "Gain of hydrogen", "Loss of oxygen"], answer: 1 },
        { q: "The oxidation number of Manganese in $KMnO_4$ is:", options: ["+2", "+4", "+6", "+7"], answer: 3 },
        { q: "In an electrolytic cell, the electrode connected to the positive terminal is the:", options: ["Cathode", "Anode", "Anion", "Cation"], answer: 1 },
        { q: "The process of coating a metal with another using electricity is:", options: ["Electrolysis", "Electroplating", "Galvanization", "Rusting"], answer: 1 },
        { q: "Which of the following is a strong electrolyte?", options: ["$CH_3COOH$", "$NH_3$", "$H_2SO_4$", "$H_2O$"], answer: 2 },
        { q: "Faraday's first law of electrolysis is represented as:", options: ["m = zIt", "m = zt", "m = IV", "m = EIt"], answer: 0 },
        { q: "A reducing agent is a substance that:", options: ["Gains electrons", "Loses electrons", "Provides oxygen", "Removes hydrogen"], answer: 1 },
        { q: "The quantity of electricity required to liberate one mole of a univalent ion is:", options: ["9650 C", "48250 C", "96500 C", "193000 C"], answer: 2 },
        { q: "Which of the following is an example of a redox reaction?", options: ["Neutralization", "Precipitation", "Rusting of iron", "Double decomposition"], answer: 2 },
        { q: "In the extraction of Aluminum, the electrolyte used is:", options: ["Bauxite in cryolite", "Molten NaCl", "Alumina in water", "Iron ore"], answer: 0 },

        // ORGANIC CHEMISTRY
        { q: "The general formula for alkanes is:", options: ["$C_nH_{2n}$", "$C_nH_{2n+2}$", "$C_nH_{2n-2}$", "$C_nH_{2n+1}$"], answer: 1 },
        { q: "Methane is also known as:", options: ["Laughing gas", "Marsh gas", "Natural gas", "Coal gas"], answer: 1 },
        { q: "The functional group of alkanols is:", options: ["-CHO", "-COOH", "-OH", "-CO-"], answer: 2 },
        { q: "The reaction between an organic acid and an alkanol is called:", options: ["Saponification", "Neutralization", "Esterification", "Hydrolysis"], answer: 2 },
        { q: "Ethene undergoes which type of reaction?", options: ["Substitution", "Addition", "Elimination", "Combustion"], answer: 1 },
        { q: "Which of the following is an aromatic hydrocarbon?", options: ["Hexane", "Ethene", "Benzene", "Ethyne"], answer: 2 },
        { q: "The process of breaking down large hydrocarbon molecules into smaller ones is:", options: ["Polymerization", "Cracking", "Reforming", "Fractional distillation"], answer: 1 },
        { q: "The IUPAC name for $CH_3CH_2COOH$ is:", options: ["Ethanoic acid", "Propanoic acid", "Butanoic acid", "Methanoic acid"], answer: 1 },
        { q: "Which of the following is a natural polymer?", options: ["Nylon", "Polythene", "Cellulose", "PVC"], answer: 2 },
        { q: "Saponification is the hydrolysis of fats and oils with:", options: ["Acid", "Enzymes", "Alkali", "Water"], answer: 2 }
    ],
    "Physics": [
        // MECHANICS: MEASUREMENT, VECTORS & MOTION
        { q: "Which of the following is a derived unit?", options: ["Ampere", "Kilogram", "Newton", "Kelvin"], answer: 2 },
        { q: "A car starts from rest and accelerates uniformly at 2 m/s² for 10 seconds. Find the distance covered.", options: ["20m", "50m", "100m", "200m"], answer: 2 },
        { q: "The area under a velocity-time graph represents:", options: ["Acceleration", "Distance covered", "Force", "Work done"], answer: 1 },
        { q: "A projectile is fired at an angle of 45° to the horizontal. At the maximum height, its vertical velocity is:", options: ["Maximum", "Zero", "Minimum", "Equal to horizontal velocity"], answer: 1 },
        { q: "Calculate the work done when a force of 20N pushes a box through a distance of 5m in the direction of the force.", options: ["4J", "100J", "25J", "15J"], answer: 1 },
        { q: "The property of a body to resist a change in its state of rest or uniform motion is:", options: ["Momentum", "Inertia", "Friction", "Gravity"], answer: 1 },
        { q: "A machine with a velocity ratio of 5 is used to lift a load of 100N with an effort of 25N. Calculate its efficiency.", options: ["20%", "50%", "80%", "100%"], answer: 2 },
        { q: "The rate of change of momentum is directly proportional to the applied:", options: ["Mass", "Velocity", "Force", "Time"], answer: 2 },
        { q: "A body of mass 2kg moving at 5 m/s collides with a stationary body and they move together. This collision is:", options: ["Elastic", "Inelastic", "Perfectly elastic", "Static"], answer: 1 },
        { q: "The escape velocity of a rocket from the earth depends on:", options: ["Mass of the rocket", "Radius of the earth", "Temperature of the atmosphere", "Speed of light"], answer: 1 },

        // THERMAL PHYSICS: HEAT & TEMPERATURE
        { q: "The clinical thermometer is characterized by having a:", options: ["Wide bore", "Long stem", "Constriction", "Large bulb"], answer: 2 },
        { q: "Calculate the heat required to raise the temperature of 2kg of water from 20°C to 50°C. (Specific heat capacity of water = 4200 J/kgK)", options: ["126,000 J", "252,000 J", "420,000 J", "84,000 J"], answer: 1 },
        { q: "The process of heat transfer in a vacuum is:", options: ["Conduction", "Convection", "Radiation", "Evaporation"], answer: 2 },
        { q: "An increase in pressure has what effect on the boiling point of water?", options: ["Decreases it", "Increases it", "No effect", "Makes it constant"], answer: 1 },
        { q: "Which of the following is the best conductor of heat?", options: ["Wood", "Copper", "Glass", "Air"], answer: 1 },
        { q: "The temperature at which the volume of an ideal gas becomes zero is:", options: ["0°C", "273 K", "0 K", "-273 K"], answer: 2 },
        { q: "Specific latent heat of fusion is the heat required to change a substance from:", options: ["Liquid to gas", "Solid to liquid", "Solid to gas", "Liquid to solid"], answer: 1 },
        { q: "A bimetallic strip works on the principle of different:", options: ["Heat capacities", "Conductivities", "Expansivities", "Densities"], answer: 2 },
        { q: "Relative humidity is measured using a:", options: ["Barometer", "Hygrometer", "Hydrometer", "Manometer"], answer: 1 },
        { q: "The anomalous expansion of water occurs between:", options: ["0°C and 100°C", "0°C and 4°C", "-4°C and 0°C", "4°C and 10°C"], answer: 1 },

        // WAVES: LIGHT & SOUND
        { q: "The distance between two successive crests of a wave is the:", options: ["Frequency", "Amplitude", "Wavelength", "Period"], answer: 2 },
        { q: "Sound waves cannot travel through:", options: ["Water", "Air", "Steel", "A vacuum"], answer: 3 },
        { q: "The change in direction of light as it passes from one medium to another is:", options: ["Reflection", "Refraction", "Diffraction", "Interference"], answer: 1 },
        { q: "A concave mirror produces a virtual, erect, and magnified image when the object is:", options: ["At infinity", "At the center of curvature", "Between the pole and focus", "Beyond C"], answer: 2 },
        { q: "The defect of the eye corrected by a converging lens is:", options: ["Myopia", "Presbyopia", "Long-sightedness", "Astigmatism"], answer: 2 },
        { q: "Which color of light has the longest wavelength in the visible spectrum?", options: ["Violet", "Green", "Yellow", "Red"], answer: 3 },
        { q: "The phenomenon of light bending around corners is:", options: ["Refraction", "Diffraction", "Polarization", "Dispersion"], answer: 1 },
        { q: "The pitch of a musical note depends on its:", options: ["Amplitude", "Frequency", "Overtones", "Intensity"], answer: 1 },
        { q: "Total internal reflection occurs when the angle of incidence is:", options: ["Less than critical angle", "Equal to critical angle", "Greater than critical angle", "Zero"], answer: 2 },
        { q: "The speed of light in a medium of refractive index 1.5 is: (Speed of light in vacuum = $3 \times 10^8$ m/s)", options: ["$2 \times 10^8$ m/s", "$1.5 \times 10^8$ m/s", "$4.5 \times 10^8$ m/s", "$3 \times 10^8$ m/s"], answer: 0 },

        // ELECTRICITY & MAGNETISM
        { q: "The unit of electric potential difference is the:", options: ["Ampere", "Ohm", "Volt", "Coulomb"], answer: 2 },
        { q: "Calculate the resistance of a wire if a current of 2A flows through it when a P.D. of 12V is applied.", options: ["24Ω", "10Ω", "6Ω", "0.16Ω"], answer: 2 },
        { q: "Three 6Ω resistors are connected in parallel. Their effective resistance is:", options: ["18Ω", "2Ω", "3Ω", "0.5Ω"], answer: 1 },
        { q: "The device used to store electric charge is a:", options: ["Resistor", "Inductor", "Capacitor", "Transistor"], answer: 2 },
        { q: "Which of the following materials is a good insulator?", options: ["Copper", "Aluminum", "Rubber", "Silver"], answer: 2 },
        { q: "A step-up transformer increases:", options: ["Current", "Voltage", "Power", "Frequency"], answer: 1 },
        { q: "The force between two parallel current-carrying conductors is due to:", options: ["Electric fields", "Magnetic fields", "Gravitational fields", "Nuclear fields"], answer: 1 },
        { q: "The part of a D.C. motor that reverses the current every half cycle is the:", options: ["Brushes", "Armature", "Commutator", "Field magnet"], answer: 2 },
        { q: "Electrical energy is measured in:", options: ["Watts", "Kilowatt-hours", "Joules per second", "Amperes"], answer: 1 },
        { q: "The direction of the magnetic field around a straight current-carrying wire is given by:", options: ["Fleming's left hand rule", "Right hand grip rule", "Lenz's law", "Faraday's law"], answer: 1 },

        // MODERN PHYSICS & RADIOACTIVITY
        { q: "The particle emitted during beta decay is an:", options: ["Alpha particle", "Electron", "Proton", "Neutron"], answer: 1 },
        { q: "The half-life of a radioactive element is 4 days. What fraction remains after 12 days?", options: ["1/4", "1/8", "1/16", "1/3"], answer: 1 },
        { q: "The process by which electrons are emitted from a heated metal surface is:", options: ["Photoelectric effect", "Thermionic emission", "Field emission", "Secondary emission"], answer: 1 },
        { q: "In the symbol $^{238}_{92}U$, the number 92 represents the:", options: ["Mass number", "Atomic number", "Number of neutrons", "Total nucleons"], answer: 1 },
        { q: "Which radiation has the highest ionizing power?", options: ["Alpha", "Beta", "Gamma", "X-rays"], answer: 0 },
        { q: "Nuclear fusion involves the:", options: ["Splitting of heavy nuclei", "Joining of light nuclei", "Emission of alpha particles", "Decay of protons"], answer: 1 },
        { q: "The energy of a photon is given by $E = hf$. What does $h$ represent?", options: ["Planck's constant", "Speed of light", "Frequency", "Wavelength"], answer: 0 },
        { q: "Which of the following is NOT a type of electromagnetic radiation?", options: ["Radio waves", "Sound waves", "Gamma rays", "Ultraviolet rays"], answer: 1 },
        { q: "The production of X-rays is the reverse process of:", options: ["Nuclear fission", "Photoelectric effect", "Radioactivity", "Thermionic emission"], answer: 1 },
        { q: "The scientist who proposed the theory of relativity is:", options: ["Isaac Newton", "Albert Einstein", "Marie Curie", "John Dalton"], answer: 1 },

        // ADDITIONAL GENERAL PHYSICS
        { q: "Surface tension is due to:", options: ["Adhesion", "Cohesion", "Gravity", "Viscosity"], answer: 1 },
        { q: "The pressure at a point in a liquid depends on its:", options: ["Mass", "Volume", "Depth", "Area"], answer: 2 },
        { q: "A barometer is used to measure:", options: ["Relative density", "Atmospheric pressure", "Fluid velocity", "Temperature"], answer: 1 },
        { q: "The SI unit of power is the:", options: ["Joule", "Watt", "Newton", "Pascal"], answer: 1 },
        { q: "Upthrust on a body immersed in a fluid is equal to the weight of fluid displaced. This is:", options: ["Pascal's principle", "Archimedes' principle", "Hooke's law", "Boyle's law"], answer: 1 },
        { q: "A force of 10N extends a spring by 2cm. What force will extend it by 5cm?", options: ["20N", "25N", "50N", "4N"], answer: 1 },
        { q: "Which of the following is a vector quantity?", options: ["Speed", "Distance", "Displacement", "Time"], answer: 2 },
        { q: "The clinical thermometer uses mercury because it:", options: ["Wets glass", "Is opaque", "Has low expansivity", "Is cheap"], answer: 1 },
        { q: "The primary colors of light are:", options: ["Red, Yellow, Blue", "Red, Green, Blue", "Yellow, Cyan, Magenta", "Red, White, Black"], answer: 1 },
        { q: "The period of a simple pendulum depends on its:", options: ["Mass of bob", "Amplitude", "Length", "Initial velocity"], answer: 2 }
    ],
    "Economics": [
        // BASIC CONCEPTS & ECONOMIC SYSTEMS
        { q: "The fundamental economic problem in every society is:", options: ["Corruption", "Scarcity", "Unemployment", "Inflation"], answer: 1 },
        { q: "Opportunity cost is best defined as the:", options: ["Cost of production", "Monetary cost of an item", "Alternative forgone", "Fixed cost"], answer: 2 },
        { q: "A point inside the Production Possibility Curve indicates:", options: ["Under-utilization of resources", "Full employment", "Unattainable production", "Economic growth"], answer: 0 },
        { q: "An economic system where the means of production are owned and controlled by private individuals is:", options: ["Socialism", "Capitalism", "Communism", "Mixed economy"], answer: 1 },
        { q: "Which of the following is NOT a basic economic question?", options: ["What to produce?", "How to produce?", "For whom to produce?", "Where to produce?"], answer: 3 },
        { q: "The reward for entrepreneurship is:", options: ["Wages", "Interest", "Rent", "Profit"], answer: 3 },

        // DEMAND, SUPPLY & ELASTICITY
        { q: "The law of demand states that, all things being equal:", options: ["Higher price leads to higher demand", "Lower price leads to lower demand", "Higher price leads to lower quantity demanded", "Price has no effect on demand"], answer: 2 },
        { q: "A rightward shift in the supply curve indicates:", options: ["A decrease in supply", "An increase in supply", "A decrease in quantity supplied", "An increase in demand"], answer: 1 },
        { q: "If the cross elasticity of demand between two goods is positive, the goods are:", options: ["Complements", "Substitutes", "Independent", "Inferior"], answer: 1 },
        { q: "Which of these factors will NOT cause a shift in the demand curve?", options: ["Income of consumers", "Price of the commodity", "Taste and preference", "Population size"], answer: 1 },
        { q: "If a 10% increase in price leads to a 5% decrease in quantity demanded, the demand is:", options: ["Elastic", "Inelastic", "Unitary elastic", "Perfectly elastic"], answer: 1 },
        { q: "The point where the demand and supply curves intersect is known as:", options: ["Break-even point", "Equilibrium point", "Margin of safety", "Maximum price"], answer: 1 },

        // THEORY OF CONSUMER BEHAVIOR
        { q: "Utility is best described as:", options: ["Usefulness of a good", "Satisfaction derived from consuming a good", "Price of a good", "Quality of a good"], answer: 1 },
        { q: "The law of diminishing marginal utility states that as more of a good is consumed:", options: ["Total utility falls", "Marginal utility falls", "Marginal utility rises", "Price falls"], answer: 1 },
        { q: "A consumer is in equilibrium when:", options: ["MUx = Px", "MUx > Px", "MUx < Px", "Total utility is zero"], answer: 0 },
        { q: "An indifference curve shows combinations of two goods that yield:", options: ["Different levels of satisfaction", "Maximum cost", "The same level of satisfaction", "Minimum utility"], answer: 2 },

        // THEORY OF PRODUCTION & COST
        { q: "The creation of utility is known as:", options: ["Consumption", "Distribution", "Production", "Exchange"], answer: 2 },
        { q: "Which of the following is an implicit cost?", options: ["Wages paid to workers", "Cost of raw materials", "Rent on owner's building", "Electricity bills"], answer: 2 },
        { q: "The law of diminishing returns applies mainly in the:", options: ["Long run", "Short run", "Market period", "Very long run"], answer: 1 },
        { q: "Fixed costs are costs that:", options: ["Change with output", "Do not change with output", "Are always zero", "Increase as price increases"], answer: 1 },
        { q: "Marginal cost is equal to average cost when average cost is:", options: ["At its maximum", "Rising", "Falling", "At its minimum"], answer: 3 },
        { q: "Division of labor is limited by the:", options: ["Size of the market", "Amount of capital", "Number of workers", "Cost of production"], answer: 0 },

        // MARKET STRUCTURES
        { q: "A market structure with many buyers and sellers dealing in identical products is:", options: ["Monopoly", "Oligopoly", "Monopolistic competition", "Perfect competition"], answer: 3 },
        { q: "A firm in a perfectly competitive market is a:", options: ["Price maker", "Price taker", "Price leader", "Price discriminator"], answer: 1 },
        { q: "Which of the following is a characteristic of a monopoly?", options: ["Many sellers", "Homogeneous product", "Barriers to entry", "Perfect information"], answer: 2 },
        { q: "A market dominated by a few large firms is called:", options: ["Duopoly", "Monopsony", "Oligopoly", "Monopoly"], answer: 2 },
        { q: "Product differentiation is a major feature of:", options: ["Perfect competition", "Monopolistic competition", "Monopoly", "Pure competition"], answer: 1 },
        { q: "Price discrimination is most possible in which market structure?", options: ["Perfect competition", "Monopoly", "Oligopoly", "Monopolistic competition"], answer: 1 },

        // BUSINESS ORGANIZATIONS & POPULATION
        { q: "The liability of a sole proprietor is:", options: ["Limited", "Unlimited", "Zero", "Shared"], answer: 1 },
        { q: "A major advantage of a public limited liability company is:", options: ["Secrecy", "Quick decision making", "Ability to raise large capital", "Exemption from taxes"], answer: 2 },
        { q: "The Malthusian theory of population stated that population grows:", options: ["Arithmetically", "Geometrically", "Exponentially", "Statically"], answer: 1 },
        { q: "The difference between the birth rate and the death rate is the:", options: ["Natural growth rate", "Net migration", "Population density", "Life expectancy"], answer: 0 },
        { q: "A population pyramid with a broad base indicates a:", options: ["High life expectancy", "High death rate", "High birth rate", "Aging population"], answer: 2 },
        { q: "Optimum population is the population size that:", options: ["Maximizes per capita income", "Is the largest possible", "Minimizes unemployment", "Equates birth and death rates"], answer: 0 },

        // MONEY, BANKING & INFLATION
        { q: "Which of the following is NOT a function of money?", options: ["Medium of exchange", "Store of value", "Measure of value", "Double coincidence of wants"], answer: 3 },
        { q: "The apex financial institution in a country is the:", options: ["Commercial bank", "Merchant bank", "Central Bank", "Mortgage bank"], answer: 2 },
        { q: "A continuous rise in the general price level is known as:", options: ["Deflation", "Inflation", "Stagflation", "Devaluation"], answer: 1 },
        { q: "Which of the following is a tool of monetary policy?", options: ["Taxation", "Government expenditure", "Open market operations", "Subsidies"], answer: 2 },
        { q: "Cost-push inflation is caused by:", options: ["Excess demand", "Increase in production costs", "Too much money in circulation", "Population growth"], answer: 1 },
        { q: "Gresham's Law states that:", options: ["Bad money drives good money out of circulation", "Supply creates its own demand", "Demand creates its own supply", "Money is a veil"], answer: 0 },

        // NATIONAL INCOME
        { q: "The total value of all final goods and services produced within a country in a year is:", options: ["Gross National Product", "Net National Product", "Gross Domestic Product", "National Income"], answer: 2 },
        { q: "Which of the following is NOT a method of measuring national income?", options: ["Income method", "Output method", "Expenditure method", "Savings method"], answer: 3 },
        { q: "Double counting is avoided in national income accounting by using the:", options: ["Value-added approach", "Total sales approach", "Income approach", "Taxation approach"], answer: 0 },
        { q: "If MPC is 0.8, what is the value of the multiplier?", options: ["2", "4", "5", "10"], answer: 2 },
        { q: "Per capita income is obtained by dividing national income by:", options: ["Total working population", "Total population", "Total area of the country", "Total employed population"], answer: 1 },
        { q: "Transfer payments are excluded from national income estimates because they:", options: ["Are too small", "Do not represent current production", "Are paid to foreigners", "Are illegal"], answer: 1 },

        // PUBLIC FINANCE & INTERNATIONAL TRADE
        { q: "A tax whose rate increases as income increases is a:", options: ["Regressive tax", "Proportional tax", "Progressive tax", "Value-added tax"], answer: 2 },
        { q: "Which of the following is an example of an indirect tax?", options: ["Personal income tax", "Company tax", "Customs duties", "Poll tax"], answer: 2 },
        { q: "A budget deficit occurs when:", options: ["Revenue exceeds expenditure", "Expenditure exceeds revenue", "Revenue equals expenditure", "Exports exceed imports"], answer: 1 },
        { q: "The principle of comparative advantage was formulated by:", options: ["Adam Smith", "David Ricardo", "Thomas Malthus", "Karl Marx"], answer: 1 },
        { q: "A restriction on the quantity of goods that can be imported is a:", options: ["Tariff", "Quota", "Embargo", "Subsidy"], answer: 1 },
        { q: "The record of a country's economic transactions with the rest of the world is its:", options: ["Balance of trade", "Balance of payments", "Terms of trade", "Foreign exchange"], answer: 1 },

        // ECONOMIC INTEGRATION & NIGERIAN ECONOMY
        { q: "The headquarters of ECOWAS is located in:", options: ["Lagos", "Accra", "Abuja", "Dakar"], answer: 2 },
        { q: "Which of the following organizations aims to stabilize the price of crude oil?", options: ["ECOWAS", "OPEC", "IMF", "World Bank"], answer: 1 },
        { q: "The major foreign exchange earner for Nigeria is:", options: ["Agriculture", "Manufacturing", "Crude oil", "Tourism"], answer: 2 },
        { q: "Indigenization policy is aimed at:", options: ["Increasing foreign investment", "Transferring ownership of businesses to indigenes", "Promoting imports", "Devaluing the currency"], answer: 1 },
        { q: "A major problem of agriculture in Nigeria is:", options: ["Excessive land", "Adequate credit facilities", "Use of crude implements", "Too many extension workers"], answer: 2 },
        { q: "The World Bank primarily provides loans for:", options: ["Short-term balance of payment deficits", "Long-term developmental projects", "Military equipment", "Recurrent expenditure"], answer: 1 }
    ],
    "Government": [
        // BASIC CONCEPTS OF GOVERNMENT
        { q: "Government as an institution of the state is defined as a body which:", options: ["Conducts elections", "Makes, enforces and interprets laws", "Controls the civil service", "Protects human rights"], answer: 1 },
        { q: "The ability to compel obedience is known as:", options: ["Authority", "Influence", "Power", "Legitimacy"], answer: 2 },
        { q: "Power becomes authority when it is:", options: ["Used forcefully", "Exercised by the military", "Backed by wealth", "Legitimized"], answer: 3 },
        { q: "The supreme and absolute power of a state to make and enforce laws is called:", options: ["Authority", "Democracy", "Sovereignty", "Nationalism"], answer: 2 },
        { q: "The principle of the Rule of Law was popularized by:", options: ["Montesquieu", "A.V. Dicey", "Jean-Jacques Rousseau", "John Locke"], answer: 1 },
        { q: "A constitution that is not contained in a single document is said to be:", options: ["Rigid", "Unwritten", "Written", "Flexible"], answer: 1 },

        // SYSTEMS & FORMS OF GOVERNMENT
        { q: "A system of government where power is concentrated at the center is:", options: ["Unitary", "Federal", "Confederal", "Presidential"], answer: 0 },
        { q: "In a federal system of government, power is shared between the:", options: ["Executive and Judiciary", "Central and regional/state governments", "President and the Parliament", "Military and civilians"], answer: 1 },
        { q: "A key feature of the parliamentary system of government is the:", options: ["Separation of powers", "Fusion of powers", "Absence of an opposition party", "Fixed tenure of office"], answer: 1 },
        { q: "An economic and political system where the means of production are controlled by the state is:", options: ["Capitalism", "Socialism", "Feudalism", "Fascism"], answer: 1 },
        { q: "Government by the wealthy few is known as:", options: ["Aristocracy", "Oligarchy", "Plutocracy", "Autocracy"], answer: 2 },
        { q: "A system of government based on the dictates of a religious deity is a:", options: ["Theocracy", "Monarchy", "Diarchy", "Gerontocracy"], answer: 0 },

        // ORGANS OF GOVERNMENT
        { q: "The primary function of the legislature is to:", options: ["Implement policies", "Make laws", "Interpret laws", "Arrest offenders"], answer: 1 },
        { q: "A legislature with two chambers is referred to as:", options: ["Unicameral", "Bicameral", "Multi-cameral", "Federal"], answer: 1 },
        { q: "The principle of Separation of Powers was propounded by:", options: ["Baron de Montesquieu", "Karl Marx", "Thomas Hobbes", "Niccolo Machiavelli"], answer: 0 },
        { q: "The independence of the judiciary can be guaranteed by:", options: ["Elected judges", "Security of tenure for judges", "The president firing judges", "Low salaries for judges"], answer: 1 },
        { q: "The power of the court to declare legislative or executive acts unconstitutional is:", options: ["Judicial review", "Judicial precedent", "Prerogative writ", "Habeas corpus"], answer: 0 },

        // CITIZENSHIP, ELECTIONS & PARTIES
        { q: "A person who is legally recognized as a member of a state is a:", options: ["Resident", "Alien", "Citizen", "Voter"], answer: 2 },
        { q: "The right of adult citizens to vote and be voted for is known as:", options: ["Enfranchisement", "Universal adult suffrage", "Electoral college", "Plebiscite"], answer: 1 },
        { q: "An election conducted to fill a vacant seat in the legislature before a general election is a:", options: ["Primary election", "Run-off election", "Bye-election", "Referendum"], answer: 2 },
        { q: "The manipulation of electoral boundaries to favor a particular party is called:", options: ["Franchise", "Filibustering", "Gerrymandering", "Lobbying"], answer: 2 },
        { q: "An organization whose main objective is to contest elections and form a government is a:", options: ["Pressure group", "Political party", "Trade union", "Co-operative society"], answer: 1 },
        { q: "Unlike political parties, pressure groups aim to:", options: ["Capture political power", "Influence government policies", "Conduct elections", "Appoint ministers"], answer: 1 },
        { q: "Public opinion is best measured through:", options: ["Opinion polls", "Mass protests", "Military decrees", "Rumors"], answer: 0 },

        // PUBLIC ADMINISTRATION
        { q: "A characteristic of the civil service is:", options: ["Partisanship", "Temporary tenure", "Anonymity", "Profit maximization"], answer: 2 },
        { q: "The body responsible for the appointment, promotion, and discipline of civil servants is the:", options: ["Civil Service Commission", "Judicial Service Commission", "Electoral Commission", "Ministry of Finance"], answer: 0 },
        { q: "An official appointed to investigate citizens' complaints against public officers is the:", options: ["Chief Justice", "Attorney General", "Ombudsman", "Auditor General"], answer: 2 },
        { q: "The primary purpose of local government is to:", options: ["Collect taxes for the federal government", "Bring government closer to the people", "Control the military", "Formulate foreign policy"], answer: 1 },

        // PRE-COLONIAL SYSTEMS & COLONIALISM
        { q: "The pre-colonial Hausa/Fulani political system was highly:", options: ["Decentralized", "Democratic", "Centralized", "Egalitarian"], answer: 2 },
        { q: "In the pre-colonial Yoruba political system, the king's excesses were checked by the:", options: ["Ogboni", "Oyomesi", "Age grades", "Emirs"], answer: 1 },
        { q: "The pre-colonial Igbo political system is best described as:", options: ["Monarchical", "Autocratic", "Decentralized and republican", "Feudal"], answer: 2 },
        { q: "The British colonial policy of ruling through traditional institutions was known as:", options: ["Assimilation", "Indirect Rule", "Association", "Direct Rule"], answer: 1 },
        { q: "The French colonial policy that aimed to turn Africans into French citizens was:", options: ["Association", "Paternalism", "Indirect Rule", "Assimilation"], answer: 3 },
        { q: "The Aba Women's Riot of 1929 was sparked by the:", options: ["Introduction of the Richards Constitution", "Appointment of Warrant Chiefs and taxation", "Amalgamation of Nigeria", "Abolition of the slave trade"], answer: 1 },

        // CONSTITUTIONAL DEVELOPMENT IN NIGERIA
        { q: "The Northern and Southern protectorates of Nigeria were amalgamated in:", options: ["1900", "1914", "1922", "1946"], answer: 1 },
        { q: "The elective principle was first introduced in Nigeria by the:", options: ["Clifford Constitution of 1922", "Richards Constitution of 1946", "Macpherson Constitution of 1951", "Lyttleton Constitution of 1954"], answer: 0 },
        { q: "Regionalism was formally introduced into Nigerian politics by the:", options: ["Clifford Constitution", "Richards Constitution", "Macpherson Constitution", "Lyttleton Constitution"], answer: 1 },
        { q: "Nigeria became a federation under the:", options: ["1946 Constitution", "1951 Constitution", "1954 Lyttleton Constitution", "1960 Constitution"], answer: 2 },
        { q: "Under the 1960 Independence Constitution, the Head of State of Nigeria was the:", options: ["Prime Minister", "President", "British Monarch (represented by the Gov-Gen)", "Chief Justice"], answer: 2 },
        { q: "Nigeria became a Republic, severing ties with the British Crown, in:", options: ["1960", "1963", "1979", "1999"], answer: 1 },
        { q: "The executive presidential system was introduced in Nigeria by the:", options: ["1963 Constitution", "1979 Constitution", "1989 Constitution", "1999 Constitution"], answer: 1 },

        // NIGERIAN POST-INDEPENDENCE & MILITARY ERA
        { q: "The first military coup in Nigeria occurred on:", options: ["October 1, 1960", "January 15, 1966", "July 29, 1966", "February 13, 1976"], answer: 1 },
        { q: "The Nigerian Civil War broke out in:", options: ["1960", "1966", "1967", "1970"], answer: 2 },
        { q: "States were first created in Nigeria in 1967 by:", options: ["Aguiyi Ironsi", "Yakubu Gowon", "Murtala Mohammed", "Olusegun Obasanjo"], answer: 1 },
        { q: "The local government reforms that standardized the system across Nigeria occurred in:", options: ["1960", "1967", "1976", "1999"], answer: 2 },
        { q: "The annulment of the June 12, 1993 presidential election was done by the regime of:", options: ["Muhammadu Buhari", "Ibrahim Babangida", "Sani Abacha", "Abdulsalami Abubakar"], answer: 1 },

        // FOREIGN POLICY & INTERNATIONAL ORGANIZATIONS
        { q: "The centerpiece of Nigeria's foreign policy has traditionally been:", options: ["Europe", "The United Nations", "Africa", "The Commonwealth"], answer: 2 },
        { q: "A policy of remaining neutral in the ideological conflict between the East and the West was:", options: ["Isolationism", "Non-alignment", "Containment", "Deterrence"], answer: 1 },
        { q: "The United Nations Organization (UNO) was established in:", options: ["1914", "1919", "1945", "1960"], answer: 2 },
        { q: "The organ of the UN responsible for maintaining international peace and security is the:", options: ["General Assembly", "Secretariat", "Security Council", "International Court of Justice"], answer: 2 },
        { q: "Which of the following countries has veto power in the UN Security Council?", options: ["Nigeria", "India", "Germany", "China"], answer: 3 },
        { q: "The Organization of African Unity (OAU), now AU, was formed in:", options: ["1960", "1963", "1975", "2002"], answer: 1 },
        { q: "The headquarters of the African Union (AU) is located in:", options: ["Abuja", "Addis Ababa", "Pretoria", "Nairobi"], answer: 1 },
        { q: "The Economic Community of West African States (ECOWAS) was formed to primarily promote:", options: ["Military alliances", "Political unification", "Economic integration", "Cultural exchanges"], answer: 2 },
        { q: "The Commonwealth of Nations is an association of:", options: ["All African countries", "Former British colonies", "All democratic nations", "European countries"], answer: 1 },
        { q: "A diplomat representing a Commonwealth country in another Commonwealth country is called a:", options: ["Ambassador", "High Commissioner", "Consul-General", "Attaché"], answer: 1 }
    ],
    "Literature in English": [
        // FIGURES OF SPEECH
        { q: "A figure of speech in which two dissimilar things are compared using 'like' or 'as' is:", options: ["Metaphor", "Simile", "Personification", "Hyperbole"], answer: 1 },
        { q: "The expression 'The pen is mightier than the sword' is an example of:", options: ["Metonymy", "Synecdoche", "Irony", "Paradox"], answer: 0 },
        { q: "'The sun smiled down on the children.' This is an example of:", options: ["Simile", "Metaphor", "Personification", "Apostrophe"], answer: 2 },
        { q: "An exaggerated statement made for effect and not meant to be taken literally is:", options: ["Euphemism", "Hyperbole", "Oxymoron", "Litotes"], answer: 1 },
        { q: "A statement that appears self-contradictory but contains an underlying truth is a:", options: ["Paradox", "Oxymoron", "Irony", "Climax"], answer: 0 },
        { q: "The use of 'passed away' instead of 'died' is an example of:", options: ["Euphemism", "Metaphor", "Pun", "Satire"], answer: 0 },
        { q: "When a part is used to represent the whole (e.g., 'All hands on deck'), it is called:", options: ["Metonymy", "Synecdoche", "Antonomasia", "Epithet"], answer: 1 },
        { q: "A figure of speech where two contradictory terms are placed side by side (e.g., 'bittersweet') is:", options: ["Paradox", "Oxymoron", "Antithesis", "Chiasmus"], answer: 1 },
        { q: "Saying the opposite of what is actually meant, often for humorous or sarcastic effect, is:", options: ["Irony", "Hyperbole", "Litotes", "Euphemism"], answer: 0 },
        { q: "A deliberate understatement used for emphasis is known as:", options: ["Hyperbole", "Litotes", "Meiosis", "Both B and C"], answer: 3 },

        // DRAMA CONCEPTS
        { q: "A play that ends on a sad or disastrous note, usually involving the downfall of the main character, is a:", options: ["Comedy", "Tragedy", "Farce", "Melodrama"], answer: 1 },
        { q: "A speech made by a character alone on stage to reveal their innermost thoughts to the audience is a:", options: ["Monologue", "Dialogue", "Soliloquy", "Aside"], answer: 2 },
        { q: "A brief remark made by a character to the audience, which the other characters on stage are not supposed to hear, is an:", options: ["Aside", "Soliloquy", "Prologue", "Epilogue"], answer: 0 },
        { q: "The main character in a play or novel is the:", options: ["Antagonist", "Protagonist", "Villain", "Narrator"], answer: 1 },
        { q: "The character who stands in opposition to the main character is the:", options: ["Protagonist", "Foil", "Antagonist", "Hero"], answer: 2 },
        { q: "The highest point of tension or turning point in the plot of a play is the:", options: ["Exposition", "Rising action", "Climax", "Denouement"], answer: 2 },
        { q: "The final resolution or untying of the plot in a literary work is the:", options: ["Conflict", "Climax", "Denouement", "Prologue"], answer: 2 },
        { q: "An introductory speech or section at the beginning of a play is a:", options: ["Prologue", "Epilogue", "Foreword", "Preface"], answer: 0 },
        { q: "A concluding speech addressed to the audience at the end of a play is an:", options: ["Prologue", "Epilogue", "Monologue", "Aside"], answer: 1 },
        { q: "A humorous scene in a tragedy introduced to relieve emotional tension is:", options: ["Comic relief", "Satire", "Farce", "Parody"], answer: 0 },

        // POETRY CONCEPTS
        { q: "A poem of 14 lines, usually written in iambic pentameter, is a:", options: ["Sonnet", "Ode", "Elegy", "Ballad"], answer: 0 },
        { q: "A group of lines forming the basic recurring metrical unit in a poem is a:", options: ["Paragraph", "Stanza", "Verse", "Meter"], answer: 1 },
        { q: "A stanza consisting of two consecutive rhyming lines is a:", options: ["Quatrain", "Sestet", "Octave", "Couplet"], answer: 3 },
        { q: "A poem written to mourn the dead is an:", options: ["Ode", "Elegy", "Epic", "Lullaby"], answer: 1 },
        { q: "A long narrative poem celebrating the heroic deeds of legendary figures is an:", options: ["Epic", "Ode", "Sonnet", "Dirge"], answer: 0 },
        { q: "A poem of praise or dedication addressed to a person, object, or event is an:", options: ["Elegy", "Ode", "Epic", "Ballad"], answer: 1 },
        { q: "Poetry that does not have a regular meter or rhyme scheme is called:", options: ["Blank verse", "Free verse", "Rhymed verse", "Lyric"], answer: 1 },
        { q: "Poetry written in unrhymed iambic pentameter is known as:", options: ["Blank verse", "Free verse", "Prose", "Sonnet"], answer: 0 },
        { q: "The running over of a sentence from one line of poetry to the next without a pause is:", options: ["Caesura", "Enjambment", "Assonance", "Alliteration"], answer: 1 },
        { q: "A short, simple song or poem intended to put a child to sleep is a:", options: ["Dirge", "Ballad", "Lullaby", "Lyric"], answer: 2 },

        // PROSE & NARRATIVE TECHNIQUES
        { q: "The perspective from which a story is told is the:", options: ["Setting", "Point of view", "Theme", "Plot"], answer: 1 },
        { q: "A narrator who is a character in the story and uses 'I' or 'we' is using the:", options: ["First-person point of view", "Second-person point of view", "Third-person limited", "Third-person omniscient"], answer: 0 },
        { q: "An 'all-knowing' narrator who reveals the thoughts and feelings of all characters uses the:", options: ["First-person", "Objective view", "Omniscient point of view", "Limited view"], answer: 2 },
        { q: "The time and place in which the events of a story occur is the:", options: ["Plot", "Setting", "Theme", "Atmosphere"], answer: 1 },
        { q: "The central idea, message, or underlying meaning of a literary work is the:", options: ["Plot", "Subject", "Theme", "Motif"], answer: 2 },
        { q: "The sequence of events that make up a story is the:", options: ["Setting", "Theme", "Plot", "Conflict"], answer: 2 },
        { q: "A literary device that interrupts the chronological order of a narrative to show past events is a:", options: ["Foreshadowing", "Flashback", "Climax", "Suspense"], answer: 1 },
        { q: "Hints or clues given by the author about what will happen later in the story is:", options: ["Flashback", "Foreshadowing", "Irony", "Symbolism"], answer: 1 },
        { q: "A prose narrative longer than a short story but shorter than a novel is a:", options: ["Novella", "Fable", "Myth", "Legend"], answer: 0 },
        { q: "A novel written in the form of a series of letters is called an:", options: ["Autobiographical novel", "Historical novel", "Epistolary novel", "Picaresque novel"], answer: 2 },

        // SOUND DEVICES & LITERARY APPRECIATION
        { q: "The repetition of initial consonant sounds in neighboring words (e.g., 'Peter Piper picked') is:", options: ["Assonance", "Consonance", "Alliteration", "Onomatopoeia"], answer: 2 },
        { q: "The repetition of vowel sounds within closely placed words is:", options: ["Alliteration", "Assonance", "Consonance", "Rhyme"], answer: 1 },
        { q: "Words that imitate the sounds they describe (e.g., 'buzz', 'hiss') are examples of:", options: ["Pun", "Onomatopoeia", "Hyperbole", "Simile"], answer: 1 },
        { q: "A play on words that have similar sounds but different meanings is a:", options: ["Pun", "Satire", "Sarcasm", "Irony"], answer: 0 },
        { q: "A question asked for effect, not requiring an answer, is a:", options: ["Direct question", "Rhetorical question", "Probing question", "Leading question"], answer: 1 },
        { q: "The use of humor, irony, or ridicule to expose and criticize human vices or follies is:", options: ["Farce", "Satire", "Melodrama", "Tragedy"], answer: 1 },
        { q: "A harsh, cutting remark intended to mock or wound is:", options: ["Satire", "Irony", "Sarcasm", "Parody"], answer: 2 },
        { q: "The pattern of end rhymes in a poem, usually represented by letters (e.g., ABAB), is the:", options: ["Rhythm", "Meter", "Rhyme scheme", "Stanza"], answer: 2 },
        { q: "A person who writes plays is called a:", options: ["Novelist", "Poet", "Playwright", "Director"], answer: 2 },
        { q: "A song of mourning or lamentation, usually associated with funerals, is a:", options: ["Lullaby", "Dirge", "Ode", "Lyric"], answer: 1 },

        // ADVANCED LITERARY TERMS
        { q: "The purging or purification of emotions (especially pity and fear) experienced by the audience of a tragedy is:", options: ["Catharsis", "Hamartia", "Hubris", "Nemesis"], answer: 0 },
        { q: "The fatal flaw or error in judgment that leads to the downfall of a tragic hero is:", options: ["Hubris", "Catharsis", "Hamartia", "Peripeteia"], answer: 2 },
        { q: "Excessive pride or self-confidence in a tragic hero is known as:", options: ["Hamartia", "Hubris", "Nemesis", "Anagnorisis"], answer: 1 },
        { q: "The choice of words and style of expression used by an author is their:", options: ["Tone", "Mood", "Diction", "Syntax"], answer: 2 },
        { q: "The author's attitude toward the subject matter or the audience is the:", options: ["Mood", "Atmosphere", "Tone", "Setting"], answer: 2 },
        { q: "The atmosphere or emotional feeling created in the reader by a literary work is the:", options: ["Tone", "Diction", "Mood", "Style"], answer: 2 },
        { q: "A humorous imitation of a serious piece of literature or writing is a:", options: ["Satire", "Parody", "Farce", "Comedy"], answer: 1 },
        { q: "A story in which characters, objects, and events represent abstract concepts or moral qualities is an:", options: ["Allegory", "Epic", "Fable", "Myth"], answer: 0 },
        { q: "A brief story, usually featuring animals as characters, that teaches a moral lesson is a:", options: ["Myth", "Legend", "Fable", "Parable"], answer: 2 },
        { q: "The emotional tension or uncertainty about what will happen next in a story is:", options: ["Climax", "Conflict", "Suspense", "Foreshadowing"], answer: 2 }
    ],
    "Commerce": [
        // INTRODUCTION TO COMMERCE & TRADE
        { q: "Commerce is defined as the study of:", options: ["Production of goods", "Distribution and exchange of goods", "Consumption of goods", "Warehousing of goods"], answer: 1 },
        { q: "Which of the following is an example of an extractive industry?", options: ["Textile manufacturing", "Quarrying", "Banking", "Construction"], answer: 1 },
        { q: "The process of buying and selling goods within the boundaries of a country is:", options: ["International trade", "Home trade", "Entrepôt trade", "Foreign trade"], answer: 1 },
        { q: "A person who buys goods in large quantities from a manufacturer and sells in smaller quantities to retailers is a:", options: ["Wholesaler", "Broker", "Factor", "Consumer"], answer: 0 },
        { q: "The trade that involves buying goods from one country and selling them to another is:", options: ["Export trade", "Import trade", "Entrepôt trade", "Bilateral trade"], answer: 2 },
        { q: "Small-scale retail trade includes:", options: ["Department stores", "Hawking", "Supermarkets", "Mail order business"], answer: 1 },
        { q: "A document sent by a seller to a buyer to correct an overcharge on an invoice is a:", options: ["Debit note", "Credit note", "Pro-forma invoice", "Delivery note"], answer: 1 },
        { q: "Which of the following is a function of the retailer?", options: ["Granting credit to manufacturers", "Breaking the bulk for consumers", "Providing warehousing for wholesalers", "Reducing the cost of production"], answer: 1 },

        // AID TO TRADE: BANKING & INSURANCE
        { q: "Which of the following is NOT an aid to trade?", options: ["Advertising", "Banking", "Agriculture", "Insurance"], answer: 2 },
        { q: "A document used to withdraw money from a current account is a:", options: ["Pay-in slip", "Cheque", "Passbook", "Credit note"], answer: 1 },
        { q: "The bank account that allows the holder to enjoy an overdraft facility is the:", options: ["Savings account", "Current account", "Fixed deposit account", "Joint account"], answer: 1 },
        { q: "Insurance is based on the principle of:", options: ["Profit making", "Indemnity", "Speculation", "Double counting"], answer: 1 },
        { q: "The amount paid periodically by the insured to the insurer is called:", options: ["Premium", "Commission", "Dividend", "Interest"], answer: 0 },
        { q: "A situation where a person cannot insure a property that does not belong to him is based on:", options: ["Utmost good faith", "Insurable interest", "Subrogation", "Proximate cause"], answer: 1 },
        { q: "Which of these insurance policies covers a ship's hull and cargo?", options: ["Fire insurance", "Marine insurance", "Life assurance", "Burglary insurance"], answer: 1 },
        { q: "The 'central bank' of Nigeria was established primarily to:", options: ["Lend money to the public", "Issue currency and control the monetary system", "Compete with commercial banks", "Accept deposits from school children"], answer: 1 },

        // ADVERTISING, TRANSPORT & WAREHOUSING
        { q: "The type of advertising aimed at creating a favorable image for a company rather than a specific product is:", options: ["Persuasive advertising", "Informative advertising", "Institutional advertising", "Mass advertising"], answer: 2 },
        { q: "Which mode of transport is most suitable for carrying bulky and heavy goods over long distances?", options: ["Road", "Air", "Rail", "Pipe-line"], answer: 2 },
        { q: "A warehouse where imported goods are kept until the customs duties are paid is a:", options: ["Private warehouse", "State warehouse", "Bonded warehouse", "Wholesale warehouse"], answer: 2 },
        { q: "The use of various means to make the public aware of a product is:", options: ["Branding", "Packaging", "Advertising", "Pricing"], answer: 2 },
        { q: "Which of the following is a disadvantage of road transport?", options: ["Flexibility", "Door-to-door service", "High risk of accidents and congestion", "Low maintenance cost"], answer: 2 },
        { q: "The main purpose of branding a product is to:", options: ["Make it expensive", "Protect it from damage", "Distinguish it from competitors", "Make it heavy"], answer: 2 },

        // BUSINESS ORGANIZATIONS & FORMATION
        { q: "The document that regulates the internal affairs of a public limited company is the:", options: ["Memorandum of Association", "Articles of Association", "Certificate of Incorporation", "Prospectus"], answer: 1 },
        { q: "A business owned and managed by one person is a:", options: ["Partnership", "Sole Proprietorship", "Private Company", "Co-operative Society"], answer: 1 },
        { q: "The minimum number of persons required to form a private limited company is:", options: ["2", "7", "50", "Unlimited"], answer: 0 },
        { q: "Which of the following business units is owned by the government?", options: ["Public Limited Company", "Partnership", "Public Corporation", "Co-operative Society"], answer: 2 },
        { q: "A major disadvantage of a partnership is:", options: ["Shared decision making", "More capital than a sole trader", "Unlimited liability for general partners", "Privacy of records"], answer: 2 },
        { q: "The invitation to the public to subscribe for shares in a company is called a:", options: ["Prospectus", "Certificate of Trading", "Memorandum", "Articles"], answer: 0 },
        { q: "Capital used for the day-to-day running of a business is:", options: ["Fixed capital", "Working capital", "Authorized capital", "Issued capital"], answer: 1 },
        { q: "The sharing of profits among members of a co-operative society is based on:", options: ["Capital contributed", "Level of patronage", "Equality", "Seniority"], answer: 1 },

        // STOCK EXCHANGE & CAPITAL MARKET
        { q: "A person who buys and sells shares on his own behalf on the stock exchange is a:", options: ["Broker", "Jobber", "Bull", "Bear"], answer: 1 },
        { q: "A speculator who buys shares expecting their prices to rise in the future is a:", options: ["Bear", "Stag", "Bull", "Broker"], answer: 2 },
        { q: "The secondary market for old and existing securities is the:", options: ["Money market", "Stock exchange", "Commodity market", "Insurance market"], answer: 1 },
        { q: "Shares that carry a fixed rate of dividend are:", options: ["Ordinary shares", "Preference shares", "Debentures", "Deferred shares"], answer: 1 },
        { q: "A loan to a company that carries a fixed rate of interest is a:", options: ["Share", "Debenture", "Stock", "Equity"], answer: 1 },

        // MONEY & COMMUNICATON
        { q: "The medium of communication that involves the use of spoken words is:", options: ["Written communication", "Visual communication", "Oral communication", "Non-verbal communication"], answer: 2 },
        { q: "The fastest means of sending urgent letters within a country is through:", options: ["Registered post", "Express mail", "Parcel post", "Ordinary mail"], answer: 1 },
        { q: "The exchange of goods for other goods is known as:", options: ["Direct trade", "Barter trade", "Indirect trade", "Foreign trade"], answer: 1 },
        { q: "Which of the following is a quality of good money?", options: ["Scarcity", "Portability", "Bulkiness", "Heterogeneity"], answer: 1 },

        // LEGAL ASPECTS & CONSUMER PROTECTION
        { q: "The 'Caveat Emptor' rule means:", options: ["Let the seller beware", "Let the buyer beware", "Goods cannot be returned", "Fixed price only"], answer: 1 },
        { q: "A contract is discharged by 'performance' when:", options: ["One party dies", "Both parties fulfill their obligations", "The court cancels it", "Time expires"], answer: 1 },
        { q: "The body responsible for ensuring the quality of food and drugs in Nigeria is:", options: ["SON", "NAFDAC", "EFCC", "ICPC"], answer: 1 },
        { q: "Which of the following protects consumers against substandard manufactured goods in Nigeria?", options: ["NAFDAC", "SON", "NIPC", "NDIC"], answer: 1 },

        // MANAGEMENT & MARKETING
        { q: "The process of getting the right product to the right place at the right time is:", options: ["Manufacturing", "Marketing", "Warehousing", "Financing"], answer: 1 },
        { q: "The organizational structure that shows the flow of authority from top to bottom is:", options: ["Line organization", "Staff organization", "Matrix organization", "Functional organization"], answer: 0 },
        { q: "The 4 P's of marketing are Product, Price, Place and:", options: ["Position", "Promotion", "Performance", "Packaging"], answer: 1 },
        { q: "A market for short-term loans and financial instruments is the:", options: ["Capital market", "Money market", "Stock market", "Foreign exchange market"], answer: 1 },
        { q: "Which of the following is a function of management?", options: ["Planning", "Organizing", "Controlling", "All of the above"], answer: 3 },
        { q: "The division of a market into distinct groups of buyers is:", options: ["Market research", "Market segmentation", "Market skimming", "Market penetration"], answer: 1 },
        { q: "Which document gives a person the right to act on behalf of another in business?", options: ["Proxy", "Power of Attorney", "Will", "Affidavit"], answer: 1 },

        // TRADE ASSOCIATIONS & INTERNATIONAL ORGANIZATIONS
        { q: "An association of people in the same line of business to protect their interests is a:", options: ["Trade union", "Chamber of Commerce", "Consortium", "Cartel"], answer: 1 },
        { q: "The headquarters of the World Trade Organization (WTO) is in:", options: ["New York", "London", "Geneva", "Paris"], answer: 2 },
        { q: "A group of countries that have agreed to eliminate trade barriers among themselves is a:", options: ["Monopoly", "Trade association", "Free trade area", "Consortium"], answer: 2 },
        { q: "The primary aim of OPEC is to:", options: ["Provide loans to poor countries", "Coordinate and unify petroleum policies of members", "Fight against terrorism", "Promote world peace"], answer: 1 },
        { q: "Which organization provides long-term loans for capital development?", options: ["IMF", "World Bank", "CBN", "Commercial banks"], answer: 1 },
        { q: "The African Continental Free Trade Area (AfCFTA) was established to:", options: ["Promote military cooperation", "Create a single market for goods and services in Africa", "Abolish national currencies", "Increase taxes on imports"], answer: 1 }
    ],
    "Principles of Accounts": [
        // INTRODUCTION & THE ACCOUNTING EQUATION
        { q: "The accounting equation is expressed as:", options: ["Assets = Liabilities - Capital", "Assets = Liabilities + Capital", "Liabilities = Assets + Capital", "Capital = Assets + Liabilities"], answer: 1 },
        { q: "A person to whom a business owes money is a:", options: ["Debtor", "Creditor", "Shareholder", "Customer"], answer: 1 },
        { q: "Which of the following is a fixed asset?", options: ["Cash at bank", "Stock of goods", "Motor vehicle", "Debtors"], answer: 2 },
        { q: "The process of recording, classifying and summarizing financial transactions is:", options: ["Auditing", "Book-keeping", "Accounting", "Budgeting"], answer: 2 },
        { q: "Intangible assets include:", options: ["Machinery", "Goodwill", "Furniture", "Inventory"], answer: 1 },
        { q: "Working Capital is calculated as:", options: ["Total Assets - Total Liabilities", "Fixed Assets - Current Assets", "Current Assets - Current Liabilities", "Long term Liabilities + Capital"], answer: 2 },

        // DOUBLE ENTRY & BOOKS OF ORIGINAL ENTRY
        { q: "The double-entry system of book-keeping states that:", options: ["Every debit must have a credit", "Every transaction must be recorded twice", "Accounts must be balanced monthly", "Cash must equal bank balance"], answer: 0 },
        { q: "Which of the following is a book of original entry?", options: ["Ledger", "Trial Balance", "Sales Journal", "Balance Sheet"], answer: 2 },
        { q: "The Petty Cash Book is used for:", options: ["Recording large payments", "Recording small office expenses", "Recording sales on credit", "Recording bank deposits"], answer: 1 },
        { q: "A Cash Book that has columns for Cash, Bank, and Discount is a:", options: ["Single column cash book", "Double column cash book", "Three-column cash book", "Petty cash book"], answer: 2 },
        { q: "The 'Folio' column in the ledger is used for:", options: ["Recording dates", "Cross-referencing to the journal", "Calculating totals", "Writing descriptions"], answer: 1 },
        { q: "Goods returned by a customer to the business are recorded in the:", options: ["Returns Outwards Journal", "Returns Inwards Journal", "General Journal", "Cash Book"], answer: 1 },

        // THE LEDGER & TRIAL BALANCE
        { q: "The main book of accounts where all transactions are finally recorded is the:", options: ["Journal", "Ledger", "Trial Balance", "Cash Book"], answer: 1 },
        { q: "A Trial Balance is prepared to check the:", options: ["Profit of the business", "Financial position", "Arithmetical accuracy of the ledger", "Cash in hand"], answer: 2 },
        { q: "Which of the following errors will NOT be revealed by a Trial Balance?", options: ["Error in addition", "Posting to the wrong side of an account", "Error of original entry", "Omission of a total"], answer: 2 },
        { q: "An error where a transaction is completely forgotten is an:", options: ["Error of principle", "Error of commission", "Error of omission", "Error of original entry"], answer: 2 },
        { q: "Posting $₦50$ to the Sales Account instead of $₦500$ is an:", options: ["Error of principle", "Error of commission", "Error of transposition", "Error of omission"], answer: 1 },

        // FINAL ACCOUNTS (TRADING, P&L, BALANCE SHEET)
        { q: "The purpose of a Trading Account is to determine:", options: ["Net Profit", "Gross Profit", "Cost of goods sold", "Net Assets"], answer: 1 },
        { q: "Which of the following is found in the Profit and Loss Account?", options: ["Opening Stock", "Purchases", "Salaries and Wages", "Sales"], answer: 2 },
        { q: "The formula for Cost of Goods Sold is:", options: ["Opening Stock + Purchases - Closing Stock", "Sales - Gross Profit", "Opening Stock + Sales - Purchases", "Both A and B"], answer: 3 },
        { q: "Current Liabilities include:", options: ["Bank Overdraft", "Long-term Loan", "Building", "Capital"], answer: 0 },
        { q: "The excess of income over expenditure in a non-profit making organization is:", options: ["Net Profit", "Surplus", "Deficit", "Gross Profit"], answer: 1 },
        { q: "A Balance Sheet is a statement of:", options: ["Income and Expenditure", "Profit and Loss", "Assets and Liabilities", "Cash flows"], answer: 2 },

        // BANK RECONCILIATION & ADJUSTMENTS
        { q: "A Bank Reconciliation Statement is prepared to harmonize the:", options: ["Cash book and Ledger", "Cash book and Bank Statement", "Trial Balance and Balance Sheet", "Sales and Purchases"], answer: 1 },
        { q: "Unpresented cheques are cheques that have been:", options: ["Recorded in the cash book but not yet by the bank", "Recorded by the bank but not in the cash book", "Rejected by the bank", "Lost in transit"], answer: 0 },
        { q: "A 'Dishonoured Cheque' is one which:", options: ["Is dated in the future", "The bank refuses to pay", "Has no date", "Is torn"], answer: 1 },
        { q: "Accrued expenses are:", options: ["Expenses paid in advance", "Expenses due but not yet paid", "Income received in advance", "Income due but not yet received"], answer: 1 },
        { q: "Provision for bad debts is an example of the accounting concept of:", options: ["Consistency", "Prudence", "Going Concern", "Materiality"], answer: 1 },
        { q: "Depreciation is the permanent decrease in the value of:", options: ["Current Assets", "Fixed Assets", "Liabilities", "Capital"], answer: 1 },

        // PARTNERSHIP & COMPANY ACCOUNTS
        { q: "The document that contains the rules governing a partnership is the:", options: ["Memorandum of Association", "Partnership Deed", "Articles of Association", "Prospectus"], answer: 1 },
        { q: "In the absence of an agreement, partners share profits:", options: ["In ratio of capital", "Equally", "In ratio of age", "Based on hours worked"], answer: 1 },
        { q: "Interest on partners' drawings is credited to the:", options: ["Partners' Capital Account", "Partners' Current Account", "Profit and Loss Appropriation Account", "Trading Account"], answer: 2 },
        { q: "The capital of a limited liability company is divided into:", options: ["Loans", "Debentures", "Shares", "Reserves"], answer: 2 },
        { q: "Dividends are paid to:", options: ["Creditors", "Debenture holders", "Shareholders", "Bankers"], answer: 2 },

        // RATIO ANALYSIS & MANUFACTURING
        { q: "The ratio that measures a firm's ability to meet short-term obligations is:", options: ["Net Profit Ratio", "Current Ratio", "Stock Turnover Ratio", "Debt-to-Equity Ratio"], answer: 1 },
        { q: "Acid Test Ratio is calculated as:", options: ["Current Assets / Current Liabilities", "(Current Assets - Stock) / Current Liabilities", "Total Assets / Total Liabilities", "Fixed Assets / Current Liabilities"], answer: 1 },
        { q: "In a manufacturing account, 'Prime Cost' is the sum of:", options: ["Factory Overheads + Direct Materials", "Direct Materials + Direct Labour + Direct Expenses", "Indirect Labour + Factory Rent", "Opening Stock + Purchases"], answer: 1 },
        { q: "Which of the following is a factory overhead?", options: ["Raw materials", "Factory Power and Fuel", "Direct Wages", "Royalties"], answer: 1 },

        // MISCELLANEOUS
        { q: "The 'Going Concern' concept assumes that:", options: ["The business will close soon", "The business will continue to operate indefinitely", "Profit must be calculated monthly", "Assets must be valued at market price"], answer: 1 },
        { q: "Capital Expenditure is money spent on:", options: ["Day to day running of business", "Acquisition of fixed assets", "Payment of salaries", "Buying stationery"], answer: 1 },
        { q: "Which of the following is a nominal account?", options: ["Cash Account", "Building Account", "Rent Account", "Bank Account"], answer: 2 }
    ],
    "Geography": [
        // THE EARTH AS A PLANET & THE SOLAR SYSTEM
        { q: "The planet closest to the sun is:", options: ["Venus", "Mars", "Mercury", "Jupiter"], answer: 2 },
        { q: "The rotation of the earth on its axis causes:", options: ["Seasons", "Day and night", "Eclipse", "Tides"], answer: 1 },
        { q: "The imaginary line that divides the earth into Northern and Southern hemispheres is the:", options: ["Prime Meridian", "Equator", "Tropic of Cancer", "Arctic Circle"], answer: 1 },
        { q: "The earth completes one revolution around the sun in approximately:", options: ["24 hours", "30 days", "365.25 days", "28 days"], answer: 2 },
        { q: "If the time at Greenwich (0°) is 12:00 noon, what is the time at a place on longitude 15°E?", options: ["11:00 AM", "1:00 PM", "12:15 PM", "2:00 PM"], answer: 1 },

        // LITHOSPHERE (ROCKS & LANDFORMS)
        { q: "Rocks formed from the cooling and solidification of molten magma are:", options: ["Sedimentary", "Metamorphic", "Igneous", "Calcareous"], answer: 2 },
        { q: "Which of the following is an example of a sedimentary rock?", options: ["Granite", "Basalt", "Limestone", "Marble"], answer: 2 },
        { q: "The process by which rocks are broken down in situ by weather elements is:", options: ["Erosion", "Weathering", "Deposition", "Mass wasting"], answer: 1 },
        { q: "An example of a volcanic mountain in Africa is:", options: ["Mount Kilimanjaro", "Drakensberg Mountains", "Atlas Mountains", "Adamawa Highlands"], answer: 0 },
        { q: "The feature formed when a river enters a sea and deposits its load is a:", options: ["Meander", "Waterfall", "Delta", "Gorge"], answer: 2 },
        { q: "A 'V-shaped' valley is characteristic of which stage of a river?", options: ["Upper stage", "Middle stage", "Lower stage", "Old stage"], answer: 0 },

        // ATMOSPHERE (CLIMATE & WEATHER)
        { q: "The layer of the atmosphere closest to the earth's surface is the:", options: ["Stratosphere", "Mesosphere", "Troposphere", "Thermosphere"], answer: 2 },
        { q: "The instrument used to measure atmospheric pressure is the:", options: ["Thermometer", "Hygrometer", "Barometer", "Anemometer"], answer: 2 },
        { q: "Lines on a map joining places with the same temperature are called:", options: ["Isobars", "Isohyets", "Isotherms", "Isohels"], answer: 2 },
        { q: "Which of the following is a form of condensation?", options: ["Rain", "Dew", "Snow", "All of the above"], answer: 3 },
        { q: "The Mediterranean climate is characterized by:", options: ["Hot, wet summers", "Dry, cold winters", "Hot, dry summers and mild, wet winters", "Constant rainfall throughout the year"], answer: 2 },
        { q: "The prevailing wind that brings rain to West Africa is the:", options: ["Tropical Continental air mass", "Tropical Maritime air mass", "Harmattan", "North-East Trade winds"], answer: 1 },

        // HYDROSPHERE & BIOSPHERE
        { q: "The largest ocean in the world is the:", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: 2 },
        { q: "The salinity of ocean water refers to its:", options: ["Temperature", "Depth", "Salt content", "Oxygen level"], answer: 2 },
        { q: "The vegetation type found in regions with very high rainfall and high temperature is the:", options: ["Savannah", "Tropical Rainforest", "Desert", "Tundra"], answer: 1 },
        { q: "Which of the following is a characteristic of desert vegetation?", options: ["Broad leaves", "Succulent stems", "Tall trees", "High density of plants"], answer: 1 },
        { q: "The transfer of water from the earth's surface to the atmosphere and back is the:", options: ["Carbon cycle", "Hydrological cycle", "Nitrogen cycle", "Rock cycle"], answer: 1 },

        // HUMAN GEOGRAPHY (POPULATION & SETTLEMENT)
        { q: "The movement of people from rural areas to cities is called:", options: ["Migration", "Urbanization", "Emigration", "Settlement"], answer: 1 },
        { q: "A settlement primarily engaged in agriculture is a:", options: ["Urban settlement", "Rural settlement", "Metropolis", "Conurbation"], answer: 1 },
        { q: "Which of the following is a 'pull factor' for migration?", options: ["Unemployment", "Better job opportunities", "War", "Natural disasters"], answer: 1 },
        { q: "The total number of people living in a unit area of land is population:", options: ["Distribution", "Density", "Growth", "Structure"], answer: 1 },

        // RESOURCES & INDUSTRIES
        { q: "A renewable resource is one that:", options: ["Cannot be replaced once used", "Can be replenished naturally", "Is found deep in the earth", "Is very expensive"], answer: 1 },
        { q: "Which of the following is a major export crop for Nigeria?", options: ["Wheat", "Cocoa", "Rice", "Maize"], answer: 1 },
        { q: "The most important source of power for industrialization in Nigeria is:", options: ["Solar energy", "Petroleum", "Coal", "Wind energy"], answer: 1 },
        { q: "The location of a cement factory is mostly influenced by the proximity to:", options: ["Market", "Raw materials (limestone)", "Labour", "Water"], answer: 1 },

        // REGIONAL GEOGRAPHY: NIGERIA
        { q: "Nigeria is located between latitudes:", options: ["4°N and 14°N", "2°N and 12°N", "6°N and 14°N", "4°S and 14°S"], answer: 0 },
        { q: "The highest point in Nigeria is found in the:", options: ["Jos Plateau", "Obudu Plateau", "Adamawa Highlands (Chappal Waddi)", "Yankari Games Reserve"], answer: 2 },
        { q: "Which river is the longest in Nigeria?", options: ["River Benue", "River Niger", "River Kaduna", "River Ogun"], answer: 1 },
        { q: "The confluence of River Niger and River Benue is at:", options: ["Makurdi", "Onitsha", "Lokoja", "Jebba"], answer: 2 },
        { q: "Nigeria's largest seaport is located in:", options: ["Port Harcourt", "Calabar", "Lagos (Apapa/Tin Can)", "Warri"], answer: 2 },
        { q: "Which of the following is a landlocked country in West Africa?", options: ["Ghana", "Nigeria", "Mali", "Senegal"], answer: 2 },
        { q: "The Kainji Dam was built across River Niger primarily for:", options: ["Irrigation", "Hydro-electric power", "Fishing", "Tourism"], answer: 1 },
        { q: "Tin and Columbite are mined in Nigeria on the:", options: ["Enugu Highlands", "Jos Plateau", "Biu Plateau", "Oban Hills"], answer: 1 },
        { q: "The predominant ethnic group in Northern Nigeria is the:", options: ["Yoruba", "Igbo", "Hausa/Fulani", "Ijaw"], answer: 2 },
        { q: "Nigeria shares her western border with:", options: ["Cameroon", "Niger", "Chad", "Benin Republic"], answer: 3 },

        // MAP WORK & PRACTICAL GEOGRAPHY
        { q: "The ratio between the distance on a map and the actual distance on the ground is the:", options: ["Bearing", "Scale", "Legend", "Contour"], answer: 1 },
        { q: "On a map with a scale of 1:50,000, 2cm represents:", options: ["1 km", "5 km", "10 km", "50 km"], answer: 0 },
        { q: "Lines on a map joining places of equal height above sea level are:", options: ["Isotherms", "Isobars", "Contours", "Isohyets"], answer: 2 },
        { q: "A bearing of 225° represents which direction?", options: ["North-East", "South-East", "South-West", "North-West"], answer: 2 },
        { q: "The most accurate way of representing the earth's curved surface on a flat paper is:", options: ["A globe", "Map projection", "Sketch", "Photograph"], answer: 1 },

        // ENVIRONMENTAL ISSUES
        { q: "The depletion of the ozone layer is mainly caused by:", options: ["Carbon dioxide", "Chlorofluorocarbons (CFCs)", "Oxygen", "Nitrogen"], answer: 1 },
        { q: "Soil erosion caused by wind is most common in:", options: ["Rainforest regions", "Arid and semi-arid regions", "Swampy areas", "Mountainous regions"], answer: 1 },
        { q: "The gradual increase in the earth's average temperature is called:", options: ["Global cooling", "Global warming", "Deforestation", "Pollution"], answer: 1 },
        { q: "Oil spillage is a major environmental problem in the:", options: ["Middle Belt", "Niger Delta", "Far North", "South-West"], answer: 1 },
        { q: "The planting of trees to reclaim forest areas is:", options: ["Deforestation", "Afforestation", "Lumbering", "Farming"], answer: 1 }
    ],
    "Agricultural Science": [
        // BASIC CONCEPTS & LAND USE
        { q: "The study of the relationship between agriculture and the environment is:", options: ["Agro-ecology", "Agronomy", "Floriculture", "Silviculture"], answer: 0 },
        { q: "Which of the following land tenure systems involves the inheritance of land from parents?", options: ["Leasehold", "Communal", "Individual/Freehold", "Tenancy at will"], answer: 2 },
        { q: "The use of land for building houses and factories is referred to as:", options: ["Agricultural land use", "Non-agricultural land use", "Forestation", "Fallowing"], answer: 1 },
        { q: "Which of these is a major problem of land use in Nigeria?", options: ["Excessive rainfall", "Small land holdings due to fragmentation", "Lack of sunshine", "Too much fertilizer"], answer: 1 },
        { q: "The science of growing flowers is known as:", options: ["Pomology", "Olericulture", "Floriculture", "Agronomy"], answer: 2 },

        // SOIL SCIENCE
        { q: "The layer of the soil that is richest in organic matter is the:", options: ["A-horizon (Topsoil)", "B-horizon", "C-horizon", "Parent material"], answer: 0 },
        { q: "Which soil type has the highest water-holding capacity?", options: ["Sandy soil", "Loamy soil", "Clayey soil", "Silty soil"], answer: 2 },
        { q: "The process by which nutrients are washed down beyond the reach of plant roots is:", options: ["Erosion", "Leaching", "Capillarity", "Evaporation"], answer: 1 },
        { q: "A soil with a pH of 4.5 is said to be:", options: ["Highly alkaline", "Neutral", "Acidic", "Saline"], answer: 2 },
        { q: "To correct soil acidity, a farmer should apply:", options: ["Urea", "Lime", "Sulphur", "Organic manure"], answer: 1 },
        { q: "The removal of the top layer of soil by water or wind is:", options: ["Weathering", "Erosion", "Mulching", "Irrigation"], answer: 1 },
        { q: "Nitrogen-fixing bacteria are mostly found in the root nodules of:", options: ["Cereals", "Legumes", "Root crops", "Citrus"], answer: 1 },

        // CROP PRODUCTION & PROTECTION
        { q: "Which of the following is a cereal crop?", options: ["Cowpea", "Maize", "Cassava", "Groundnut"], answer: 1 },
        { q: "The process of removing excess seedlings from a stand is:", options: ["Thinning", "Supplying", "Pruning", "Mulching"], answer: 0 },
        { q: "The practice of covering the soil surface with dry grass to conserve moisture is:", options: ["Weeding", "Mulching", "Fallowing", "Staking"], answer: 1 },
        { q: "An example of a root tuber is:", options: ["Yam", "Sweet potato", "Onion", "Ginger"], answer: 1 },
        { q: "The botanical name for Maize is:", options: ["Oryza sativa", "Zea mays", "Manihot esculenta", "Vigna unguiculata"], answer: 1 },
        { q: "Which of the following is a fungal disease of crops?", options: ["Maize streak", "Cassava mosaic", "Smut", "Root knot"], answer: 2 },
        { q: "Chemicals used for controlling weeds are called:", options: ["Pesticides", "Fungicides", "Herbicides", "Rodenticides"], answer: 2 },
        { q: "The storage structure used for keeping grains in bulk is a:", options: ["Barn", "Rhumbus", "Silo", "Crib"], answer: 2 },

        // ANIMAL HUSBANDRY
        { q: "The process of giving birth in cattle is known as:", options: ["Farrowing", "Kidding", "Calving", "Lambing"], answer: 2 },
        { q: "A castrated male fowl is called a:", options: ["Capon", "Steer", "Wether", "Boar"], answer: 0 },
        { q: "The ruminant stomach consists of four chambers; which is the 'true stomach'?", options: ["Rumen", "Reticulum", "Omasum", "Abomasum"], answer: 3 },
        { q: "The incubation period for a domestic fowl egg is:", options: ["14 days", "21 days", "28 days", "35 days"], answer: 1 },
        { q: "Which of these is a viral disease of livestock?", options: ["Anthrax", "Foot and Mouth disease", "Coccidiosis", "Tuberculosis"], answer: 1 },
        { q: "The process of removing the horns of an animal is:", options: ["Docking", "Dehorning", "Castration", "Culling"], answer: 1 },
        { q: "High-quality green forage preserved in airtight conditions is:", options: ["Hay", "Silage", "Straw", "Concentrate"], answer: 1 },
        { q: "The parasite that causes 'Nagana' in cattle is transmitted by:", options: ["Ticks", "Tsetse fly", "Lice", "Mites"], answer: 1 },

        // AGRICULTURAL ENGINEERING & MECHANIZATION
        { q: "The farm tool used for making ridges is the:", options: ["Spade", "Hoe", "Rake", "Pick-axe"], answer: 1 },
        { q: "Which of the following is a tractor-coupled implement used for breaking soil clods?", options: ["Plough", "Harrow", "Ridger", "Planter"], answer: 1 },
        { q: "The first implement used in primary land preparation is the:", options: ["Harrow", "Planter", "Plough", "Cultivator"], answer: 2 },
        { q: "A source of farm power that is cheap but easily gets tired is:", options: ["Mechanical power", "Animal power", "Solar power", "Electrical power"], answer: 1 },
        { q: "The part of the mouldboard plough that cuts the soil horizontally is the:", options: ["Coulter", "Share", "Beam", "Handle"], answer: 1 },

        // FORESTRY & FISHERY
        { q: "The systematic management of forests is:", options: ["Deforestation", "Silviculture", "Floriculture", "Agronomy"], answer: 1 },
        { q: "Which of the following is a hardwood tree?", options: ["Pine", "Iroko", "Cedar", "Softwood"], answer: 1 },
        { q: "The practice of combining farming with tree planting is:", options: ["Monoculture", "Agro-forestry", "Mixed cropping", "Taungya system"], answer: 1 },
        { q: "A young fish used for stocking a pond is a:", options: ["Fry", "Fingerling", "Tadpole", "Hatchling"], answer: 1 },
        { q: "The instrument used for catching fish in deep water is a:", options: ["Hook and line", "Fishing net (Trawler)", "Spear", "Basket"], answer: 1 },

        // AGRICULTURAL ECONOMICS & EXTENSION
        { q: "The law of diminishing returns in agriculture states that:", options: ["More input always leads to more output", "Output eventually decreases as more variable input is added to fixed input", "Farmers should never use fertilizer", "Prices of crops always fall"], answer: 1 },
        { q: "A market where only one seller exists for a product is a:", options: ["Monopoly", "Oligopoly", "Perfect competition", "Monopsony"], answer: 0 },
        { q: "The person who helps to pass new agricultural information to farmers is the:", options: ["Banker", "Extension agent", "Manager", "Wholesaler"], answer: 1 },
        { q: "Short-term credit is usually expected to be repaid within:", options: ["1 year", "5 years", "10 years", "20 years"], answer: 0 },
        { q: "The difference between total assets and total liabilities in a farm business is:", options: ["Gross margin", "Net worth", "Profit", "Liquidity"], answer: 1 },
        { q: "A subsidy in agriculture is:", options: ["A tax on farmers", "Financial assistance by the government to reduce cost of inputs", "A penalty for late planting", "A high interest rate"], answer: 1 },

        // GENERAL REVISION QUESTIONS
        { q: "The botanical name for Rice is:", options: ["Vigna unguiculata", "Oryza sativa", "Zea mays", "Manihot esculenta"], answer: 1 },
        { q: "The process of removing unwanted plants from the farm is:", options: ["Harvesting", "Weeding", "Thinning", "Pruning"], answer: 1 },
        { q: "The most important biotic factor affecting agricultural production is:", options: ["Temperature", "Soil", "Pests and diseases", "Rainfall"], answer: 2 },
        { q: "Which of the following is a biennial crop?", options: ["Maize", "Cassava", "Cocoa", "Pepper"], answer: 1 },
        { q: "The primary aim of the Green Revolution was to:", options: ["Increase tree planting", "Achieve food self-sufficiency through technology", "Reduce the number of farmers", "Export more cash crops"], answer: 1 },
        { q: "The unwanted plant growing where it is not needed is a:", options: ["Crop", "Weed", "Parasite", "Fungi"], answer: 1 }
    ],
    "Christian Religious Studies": [
        // THE OLD TESTAMENT: CREATION TO THE KINGS
        { q: "According to the creation story in Genesis, man was created on the:", options: ["Third day", "Fourth day", "Fifth day", "Sixth day"], answer: 3 },
        { q: "God's covenant with Abraham was sealed with the sign of:", options: ["Baptism", "Circumcision", "Sacrifice", "A rainbow"], answer: 1 },
        { q: "Joseph was sold into slavery in Egypt by his brothers because of his:", options: ["Wealth", "Dreams", "Wisdom", "Strength"], answer: 1 },
        { q: "Moses encountered God for the first time in the form of a:", options: ["Pillar of cloud", "Burning bush", "Whirlwind", "Still small voice"], answer: 1 },
        { q: "The Passover was instituted in Egypt to commemorate the:", options: ["Crossing of the Red Sea", "Death of the firstborn of Egypt", "Beginning of the harvest", "Giving of the Ten Commandments"], answer: 1 },
        { q: "The Ten Commandments were given to Moses on Mount:", options: ["Horeb", "Sinai", "Carmel", "Nebo"], answer: 1 },
        { q: "Who succeeded Moses as the leader of the Israelites?", options: ["Caleb", "Joshua", "Aaron", "Eleazar"], answer: 1 },
        { q: "The female judge who led Israel to victory over Jabin and Sisera was:", options: ["Deborah", "Delilah", "Ruth", "Esther"], answer: 0 },
        { q: "Samuel was called by God while he was serving in the temple under:", options: ["Eli", "Abimelech", "Saul", "Nathan"], answer: 0 },
        { q: "The first king of Israel was:", options: ["David", "Saul", "Solomon", "Samuel"], answer: 1 },
        { q: "David was anointed king by Samuel in the house of:", options: ["Saul", "Jesse", "Goliath", "Jonathan"], answer: 1 },
        { q: "The prophet who challenged the 450 prophets of Baal on Mount Carmel was:", options: ["Elisha", "Elijah", "Isaiah", "Jeremiah"], answer: 1 },
        { q: "King Solomon is best remembered for his:", options: ["Military power", "Wealth", "Wisdom", "Marriage to Pharaoh's daughter"], answer: 2 },
        { q: "The kingdom of Israel was divided into two during the reign of:", options: ["Solomon", "Rehoboam", "Jeroboam", "Saul"], answer: 1 },
        { q: "The Babylonian captivity of Judah lasted for:", options: ["40 years", "50 years", "70 years", "100 years"], answer: 2 },

        // THE GOSPELS: BIRTH AND MINISTRY OF JESUS
        { q: "The angel who announced the birth of Jesus to Mary was:", options: ["Michael", "Gabriel", "Raphael", "Uriel"], answer: 1 },
        { q: "Jesus was born in Bethlehem during the reign of King:", options: ["Herod the Great", "Herod Antipas", "Agrippa", "Pilate"], answer: 0 },
        { q: "John the Baptist's main message was one of:", options: ["Judgment", "Repentance", "Prosperity", "Healing"], answer: 1 },
        { q: "Jesus was baptized by John in the River:", options: ["Nile", "Euphrates", "Jordan", "Tigris"], answer: 2 },
        { q: "The first temptation of Jesus in the wilderness was to:", options: ["Jump from the temple", "Bow to Satan", "Turn stones to bread", "Rule the world"], answer: 2 },
        { q: "Jesus' first miracle, turning water into wine, took place at:", options: ["Cana", "Nazareth", "Capernaum", "Jerusalem"], answer: 0 },
        { q: "The parable of the Good Samaritan was told to illustrate the concept of:", options: ["Faith", "Love for neighbors", "Prayer", "Forgiveness"], answer: 1 },
        { q: "In the parable of the Sower, the seeds that fell on rocky ground represent those who:", options: ["Do not understand the word", "Have no root and fall away in trials", "Are choked by worries", "Bear much fruit"], answer: 1 },
        { q: "Who was the tax collector that climbed a sycamore tree to see Jesus?", options: ["Matthew", "Zacchaeus", "Levi", "Nicodemus"], answer: 1 },
        { q: "The Transfiguration of Jesus took place in the presence of Peter, James and:", options: ["Andrew", "John", "Philip", "Thomas"], answer: 1 },
        { q: "Jesus fed the 5,000 people with five loaves and:", options: ["Two fishes", "Three fishes", "Seven fishes", "No fish"], answer: 0 },
        { q: "The 'Sermon on the Mount' begins with the:", options: ["Lord's Prayer", "Beatitudes", "Ten Commandments", "Parable of the Sower"], answer: 1 },
        { q: "Who betrayed Jesus with a kiss for thirty pieces of silver?", options: ["Peter", "Judas Iscariot", "Thomas", "Philip"], answer: 1 },
        { q: "The disciple who denied Jesus three times before the cock crowed was:", options: ["John", "Andrew", "Peter", "James"], answer: 2 },
        { q: "The Roman Governor who sentenced Jesus to be crucified was:", options: ["Pontius Pilate", "Caiaphas", "Herod", "Felix"], answer: 0 },

        // PASSION, RESURRECTION & EARLY CHURCH (ACTS)
        { q: "Jesus was crucified at a place called Golgotha, which means:", options: ["Place of Peace", "Place of the Skull", "Holy Ground", "City of David"], answer: 1 },
        { q: "The first person to see the risen Jesus on Easter morning was:", options: ["Peter", "John", "Mary Magdalene", "The Virgin Mary"], answer: 2 },
        { q: "Before His ascension, Jesus commanded His disciples to wait in Jerusalem for the:", options: ["Return of Elijah", "Holy Spirit", "Judgment Day", "Roman Peace"], answer: 1 },
        { q: "The Holy Spirit descended upon the disciples on the Day of:", options: ["Passover", "Pentecost", "Atonement", "Tabernacles"], answer: 1 },
        { q: "The first Christian martyr, who was stoned to death, was:", options: ["Stephen", "James", "Philip", "Paul"], answer: 0 },
        { q: "Saul's conversion to Christianity occurred on the road to:", options: ["Jericho", "Damascus", "Antioch", "Rome"], answer: 1 },
        { q: "The first Gentile convert to Christianity was:", options: ["The Ethiopian Eunuch", "Cornelius", "Lydia", "The Philippian Jailer"], answer: 1 },
        { q: "The city where the followers of Jesus were first called 'Christians' was:", options: ["Jerusalem", "Antioch", "Ephesus", "Corinth"], answer: 1 },
        { q: "Paul and Silas were imprisoned in Philippi for:", options: ["Preaching the gospel", "Casting out a spirit of divination", "Inciting a riot", "Refusing to pay taxes"], answer: 1 },
        { q: "Who accompanied Paul on his first missionary journey?", options: ["Silas", "Barnabas", "Luke", "Timothy"], answer: 1 },

        // THE EPISTLES & CHRISTIAN LIVING
        { q: "According to Paul in 1 Corinthians 13, the greatest of all virtues is:", options: ["Faith", "Hope", "Love (Charity)", "Knowledge"], answer: 2 },
        { q: "The 'fruit of the Spirit' as listed in Galatians includes:", options: ["Prophecy", "Speaking in tongues", "Long-suffering", "Healing"], answer: 2 },
        { q: "Paul's letter to Philemon was written to plead for the runaway slave named:", options: ["Onesimus", "Titus", "Epaphras", "Demas"], answer: 0 },
        { q: "James teaches that faith without ______ is dead.", options: ["Prayer", "Works", "Fasting", "Tithes"], answer: 1 },
        { q: "In Romans, Paul teaches that 'all have sinned and fall short of the ______.'", options: ["Kingdom of God", "Glory of God", "Law of Moses", "Grace of Jesus"], answer: 1 },

        // GENERAL THEMES & ADDITIONAL QUESTIONS
        { q: "The main theme of the book of Hosea is:", options: ["Judgment", "God's steadfast love/forgiveness", "The end of the world", "Social justice"], answer: 1 },
        { q: "Amos was a prophet who emphasized:", options: ["Royal power", "Social justice and righteousness", "Visions of the future", "Temple worship"], answer: 1 },
        { q: "The king of Judah who carried out major religious reforms was:", options: ["Ahab", "Josiah", "Zedekiah", "Jehoiakim"], answer: 1 },
        { q: "The prophet who was swallowed by a great fish was:", options: ["Joel", "Jonah", "Micah", "Malachi"], answer: 1 },
        { q: "The Golden Rule states: 'Do to others as you would ______.'", options: ["Have them do to you", "Expect from them", "Do to yourself", "Be commanded"], answer: 0 },
        { q: "Which book in the Bible contains the story of the walls of Jericho falling?", options: ["Exodus", "Joshua", "Judges", "Numbers"], answer: 1 },
        { q: "Gideon was called by God to deliver Israel from the:", options: ["Philistines", "Midianites", "Ammonites", "Moabites"], answer: 1 },
        { q: "The wisdom of Solomon was tested when two women argued over a:", options: ["Piece of gold", "Baby", "Land", "Husband"], answer: 1 },
        { q: "In the wilderness, the Israelites were fed with manna and:", options: ["Pigeons", "Quails", "Locusts", "Honey"], answer: 1 },
        { q: "Nehemiah returned to Jerusalem to rebuild the:", options: ["Temple", "City walls", "King's palace", "Marketplace"], answer: 1 },
        { q: "Who was the woman that hid the Israelite spies in Jericho?", options: ["Rahab", "Ruth", "Naomi", "Orpah"], answer: 0 },
        { q: "The shortest verse in the Bible is:", options: ["Jesus wept", "God is love", "Pray without ceasing", "In the beginning"], answer: 0 },
        { q: "The book of Revelation was written by John on the Island of:", options: ["Cyprus", "Patmos", "Malta", "Crete"], answer: 1 },
        { q: "According to Jesus, the two greatest commandments are to love God and love your:", options: ["Enemies", "Family", "Neighbor", "Friends"], answer: 2 },
        { q: "The valley of dry bones vision was seen by the prophet:", options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"], answer: 2 }
    ],
    "Islamic Studies": [
        // QUR'ANIC STUDIES & REVELATION
        { q: "The first revelation to Prophet Muhammad (SAW) occurred in the Cave of:", options: ["Thawr", "Hira", "Arafat", "Uhud"], answer: 1 },
        { q: "Which Angel was responsible for bringing revelations to the Prophet (SAW)?", options: ["Mikail", "Israfil", "Jibril", "Izrail"], answer: 2 },
        { q: "The Qur'an was revealed over a period of approximately:", options: ["10 years", "13 years", "23 years", "40 years"], answer: 2 },
        { q: "The longest Surah in the Glorious Qur'an is Suratul-:", options: ["Fatihah", "Baqarah", "Yasin", "Ikhlas"], answer: 1 },
        { q: "The opening chapter of the Qur'an is known as:", options: ["Al-Ikhlas", "Al-Fatihah", "Al-Nas", "Al-Falaq"], answer: 1 },
        { q: "The collection and standardization of the Qur'an into a single volume was completed during the caliphate of:", options: ["Abu Bakr", "Umar", "Uthman", "Ali"], answer: 2 },
        { q: "Which Surah is regarded as 'one-third of the Qur'an'?", options: ["Suratul-Kafirun", "Suratul-Ikhlas", "Suratul-Mulk", "Suratul-Fatihah"], answer: 1 },
        { q: "The Makkan Surahs generally focus on:", options: ["Islamic Legislation", "Tawhid and the Hereafter", "Jihad", "Inheritance laws"], answer: 1 },

        // HADITH & SUNNAH
        { q: "The word 'Hadith' literally means:", options: ["Action", "Speech/Narrative", "Silence", "Dream"], answer: 1 },
        { q: "The most authentic collection of Hadith is Sahih:", options: ["Muslim", "Bukhari", "Tirmidhi", "Abu Dawood"], answer: 1 },
        { q: "The silent approval of the Prophet (SAW) of an action is called:", options: ["Hadith Qudsi", "Sunnah Taqririyyah", "Sunnah Fi'liyyah", "Sunnah Qawliyyah"], answer: 1 },
        { q: "A Hadith whose chain of transmission reaches back to Allah is:", options: ["Hadith Sahih", "Hadith Da'if", "Hadith Qudsi", "Hadith Mutawatir"], answer: 2 },

        // TAWHID (FAITH/BELIEF)
        { q: "The first pillar of Islam is:", options: ["Salat", "Zakat", "Shahadah", "Sawm"], answer: 2 },
        { q: "Belief in the Oneness of Allah is called:", options: ["Shirk", "Tawhid", "Kufr", "Nifaq"], answer: 1 },
        { q: "Assigning partners to Allah is known as:", options: ["Bid'ah", "Shirk", "Riya", "Zulm"], answer: 1 },
        { q: "How many names of Allah (Asma'ul Husna) are mentioned in the Hadith?", options: ["77", "99", "101", "313"], answer: 1 },
        { q: "Which of the following is NOT one of the six articles of faith?", options: ["Belief in Angels", "Belief in Jihad", "Belief in the Prophets", "Belief in Divine Decree"], answer: 1 },
        { q: "The belief that Allah has already decreed everything that happens is:", options: ["Qadar", "Ibadah", "Taqwa", "Ihsaan"], answer: 0 },

        // FIQH (JURISPRUDENCE & WORSHIP)
        { q: "The ritual washing before Salat is called:", options: ["Ghusl", "Wudu", "Tayammum", "Istinja"], answer: 1 },
        { q: "Dry ablution performed with clean sand is known as:", options: ["Wudu", "Tayammum", "Ghusl", "Mas'h"], answer: 1 },
        { q: "How many obligatory (Fard) prayers do Muslims perform daily?", options: ["3", "5", "7", "12"], answer: 1 },
        { q: "The call to prayer is known as:", options: ["Iqamah", "Adhan", "Khutbah", "Dhikr"], answer: 1 },
        { q: "Zakat is obligatory on every wealthy Muslim once a:", options: ["Month", "Quarter", "Year", "Lifetime"], answer: 2 },
        { q: "The percentage of Zakat paid on accumulated wealth/savings is:", options: ["2.5%", "5%", "10%", "20%"], answer: 0 },
        { q: "Fasting (Sawm) is obligatory during the month of:", options: ["Muharram", "Rajab", "Sha'ban", "Ramadan"], answer: 3 },
        { q: "The night of power, better than a thousand months, is:", options: ["Laylatul Qadr", "Laylatul Mi'raj", "Eid-ul-Fitr", "Yaumul Arafat"], answer: 0 },
        { q: "Hajj is perform in the month of:", options: ["Dhul-Qa'dah", "Dhul-Hijjah", "Shawwal", "Muharram"], answer: 1 },
        { q: "The standing on the plain of ______ is the peak of Hajj.", options: ["Mina", "Muzdalifah", "Arafat", "Safa"], answer: 2 },

        // SIRAH (LIFE OF THE PROPHET SAW)
        { q: "Prophet Muhammad (SAW) was born in the year:", options: ["570 CE", "610 CE", "622 CE", "632 CE"], answer: 0 },
        { q: "The migration of the Prophet (SAW) from Makkah to Madinah is called:", options: ["Hajj", "Hijrah", "Umrah", "Jihad"], answer: 1 },
        { q: "The Islamic calendar begins from the year of:", options: ["The Prophet's birth", "The first revelation", "The Hijrah", "The conquest of Makkah"], answer: 2 },
        { q: "The foster mother of the Prophet (SAW) was:", options: ["Aminah", "Halimah", "Khadijah", "Fatima"], answer: 1 },
        { q: "The first woman to embrace Islam was:", options: ["Aisha", "Khadijah", "Sumayyah", "Fatima"], answer: 1 },
        { q: "The first battle fought by the Muslims against the Makkans was:", options: ["Battle of Uhud", "Battle of Badr", "Battle of Khandaq", "Battle of Hunayn"], answer: 1 },
        { q: "The Prophet (SAW) passed away in the year:", options: ["622 CE", "630 CE", "632 CE", "640 CE"], answer: 2 },
        { q: "The title 'Al-Amin' given to the Prophet (SAW) means:", options: ["The Brave", "The Trustworthy", "The Wise", "The Beautiful"], answer: 1 },

        // ISLAMIC HISTORY & CIVILIZATION
        { q: "The first Caliph of Islam was:", options: ["Umar ibn al-Khattab", "Ali ibn Abi Talib", "Abu Bakr as-Siddiq", "Uthman ibn Affan"], answer: 2 },
        { q: "Which Caliph was known as 'Al-Faruq'?", options: ["Abu Bakr", "Umar", "Uthman", "Ali"], answer: 1 },
        { q: "The fourth rightly guided Caliph was:", options: ["Muawiyah", "Hassan", "Ali ibn Abi Talib", "Umar bin Abdulaziz"], answer: 2 },
        { q: "The capital of the Abbasid Caliphate was:", options: ["Damascus", "Madinah", "Baghdad", "Cairo"], answer: 2 },

        // GENERAL ISLAMIC ETIQUETTE & LAW
        { q: "Actions that are permissible in Islam are called:", options: ["Haram", "Halal", "Makruh", "Mustahabb"], answer: 1 },
        { q: "Actions that are strictly forbidden are:", options: ["Mubah", "Haram", "Sunnah", "Mandub"], answer: 1 },
        { q: "Inheritance law in Islam is known as:", options: ["Nikah", "Mirath/Fara'id", "Talaq", "Riba"], answer: 1 },
        { q: "Interest on loans, which is forbidden in Islam, is called:", options: ["Zakat", "Sadaqah", "Riba", "Jizyah"], answer: 2 },
        { q: "The Islamic greeting 'Assalamu Alaikum' means:", options: ["God is Great", "Peace be unto you", "Thanks be to Allah", "Welcome"], answer: 1 },
        { q: "Treating parents with kindness is called:", options: ["Sadaqah", "Birrul Walidayn", "Silatul Rahim", "Adab"], answer: 1 },
        { q: "The pre-Islamic period of ignorance in Arabia is known as:", options: ["Jahiliyyah", "Asabiyyah", "Fitnah", "Umayyad"], answer: 0 },
        { q: "A Muslim woman's dowry given at marriage is called:", options: ["Walimah", "Mahr", "Nafaqah", "Iddah"], answer: 1 },
        { q: "The waiting period for a divorced woman before remarriage is:", options: ["Sujud", "Iddah", "Ihram", "Tawaf"], answer: 1 },
        { q: "Feeding the poor and needy is a form of:", options: ["Riya", "Sadaqah", "Nifaq", "Takabbur"], answer: 1 }
    ],
    "Computer Studies": [
        // INTRODUCTION TO COMPUTING
        { q: "The physical components of a computer system are collectively known as:", options: ["Software", "Hardware", "Firmware", "Malware"], answer: 1 },
        { q: "Which generation of computers used Vacuum Tubes?", options: ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"], answer: 0 },
        { q: "The brain of the computer that performs all calculations and data processing is the:", options: ["RAM", "Hard Drive", "Central Processing Unit (CPU)", "Monitor"], answer: 2 },
        { q: "Integrated Circuits (ICs) were the main technology of which computer generation?", options: ["First", "Second", "Third", "Fourth"], answer: 2 },
        { q: "Which of the following is an example of a Supercomputer?", options: ["IBM PC", "Cray-1", "Apple MacBook", "Dell Inspiron"], answer: 1 },
        { q: "A computer that is designed to be used by one person at a time is a:", options: ["Mainframe", "Server", "Personal Computer (PC)", "Supercomputer"], answer: 2 },

        // HARDWARE: INPUT, OUTPUT & STORAGE
        { q: "Which of the following is an input device?", options: ["Printer", "Monitor", "Scanner", "Speaker"], answer: 2 },
        { q: "The 'QWERTY' layout is most commonly associated with which device?", options: ["Mouse", "Keyboard", "Joystick", "Light Pen"], answer: 1 },
        { q: "Which of the following is a permanent storage device?", options: ["RAM", "ROM", "Hard Disk Drive (HDD)", "Cache Memory"], answer: 2 },
        { q: "The temporary memory that holds data currently being used by the CPU is:", options: ["Hard Drive", "Random Access Memory (RAM)", "Flash Drive", "DVD-ROM"], answer: 1 },
        { q: "Which of the following is an example of an optical storage medium?", options: ["Floppy Disk", "SSD", "Blu-ray Disc", "Magnetic Tape"], answer: 2 },
        { q: "The resolution of a monitor is measured in:", options: ["Inches", "Pixels", "Hertz", "Watts"], answer: 1 },
        { q: "A 'Bit' is the smallest unit of data in a computer and stands for:", options: ["Binary Digit", "Basic Integer", "Binary Team", "Byte Information"], answer: 0 },
        { q: "How many bits make up one Byte?", options: ["4 bits", "8 bits", "16 bits", "32 bits"], answer: 1 },

        // SYSTEM & APPLICATION SOFTWARE
        { q: "The software that manages computer hardware and provides a platform for applications is the:", options: ["Spreadsheet", "Operating System", "Word Processor", "Web Browser"], answer: 1 },
        { q: "Which of the following is an example of an Operating System?", options: ["Microsoft Word", "Google Chrome", "Windows 11", "Adobe Photoshop"], answer: 2 },
        { q: "Software specifically designed to help users perform tasks like writing letters or creating budgets is:", options: ["System Software", "Application Software", "Utility Software", "Malware"], answer: 1 },
        { q: "An example of an open-source operating system is:", options: ["Windows", "macOS", "Linux", "iOS"], answer: 2 },
        { q: "Programs designed to detect and remove malicious software are called:", options: ["Firewalls", "Antivirus", "Browsers", "Encoders"], answer: 1 },
        { q: "The process of starting or restarting a computer is known as:", options: ["Loading", "Booting", "Scanning", "Formatting"], answer: 1 },

        // NETWORKING & THE INTERNET
        { q: "A group of computers connected together over a small geographical area, like a school, is a:", options: ["WAN", "LAN", "MAN", "PAN"], answer: 1 },
        { q: "The worldwide system of interconnected computer networks is the:", options: ["Intranet", "Extranet", "Internet", "Ethernet"], answer: 2 },
        { q: "The unique address assigned to every device connected to the internet is the:", options: ["URL", "IP Address", "MAC Address", "Email Address"], answer: 1 },
        { q: "The protocol used to transfer web pages over the internet is:", options: ["FTP", "SMTP", "HTTP", "SNMP"], answer: 2 },
        { q: "A software application used to access and view websites is a:", options: ["Search Engine", "Web Browser", "Social Media", "Server"], answer: 1 },
        { q: "Which of the following is an example of a search engine?", options: ["Firefox", "Safari", "Google", "Opera"], answer: 2 },
        { q: "The '.com' in a web address stands for:", options: ["Community", "Communication", "Commercial", "Company"], answer: 2 },
        { q: "Unsolicited or junk emails sent in bulk are known as:", options: ["Spam", "Phishing", "Cookies", "Cache"], answer: 0 },

        // DATA PROCESSING & ALGORITHMS
        { q: "The conversion of raw facts into meaningful information is called:", options: ["Data Storage", "Data Processing", "Data Collection", "Data Gathering"], answer: 1 },
        { q: "A step-by-step set of instructions used to solve a specific problem is an:", options: ["Algorithm", "Flowchart", "Program", "Interface"], answer: 0 },
        { q: "In a flowchart, the 'Diamond' shape represents:", options: ["Start/End", "Process", "Decision", "Input/Output"], answer: 2 },
        { q: "Which of the following is a high-level programming language?", options: ["Machine Language", "Assembly Language", "Python", "Binary"], answer: 2 },
        { q: "The process of finding and fixing errors in a computer program is:", options: ["Encoding", "Decoding", "Debugging", "Compiling"], answer: 2 },

        // WORD PROCESSING & SPREADSHEETS
        { q: "The keyboard shortcut for 'Copy' in most applications is:", options: ["Ctrl + X", "Ctrl + V", "Ctrl + C", "Ctrl + Z"], answer: 2 },
        { q: "In Microsoft Word, which feature is used to check for spelling errors?", options: ["Mail Merge", "Thesaurus", "Spelling & Grammar", "Track Changes"], answer: 2 },
        { q: "In a spreadsheet like Excel, the intersection of a row and a column is called a:", options: ["Grid", "Box", "Cell", "Table"], answer: 2 },
        { q: "Which symbol is used to start a formula in Excel?", options: ["+", "@", "=", "#"], answer: 2 },
        { q: "The function used to find the total of a range of numbers in Excel is:", options: ["AVERAGE", "COUNT", "SUM", "MAX"], answer: 2 },

        // DATABASE & INFORMATION SYSTEMS
        { q: "An organized collection of structured information or data is a:", options: ["Folder", "Database", "File", "Library"], answer: 1 },
        { q: "A single piece of information in a database table (e.g., a student's last name) is a:", options: ["Record", "Field", "Row", "Key"], answer: 1 },
        { q: "A unique identifier for each record in a database table is the:", options: ["Foreign Key", "Primary Key", "Index", "Query"], answer: 1 },

        // COMPUTER ETHICS & SECURITY
        { q: "The legal right that protects the creators of software from unauthorized copying is:", options: ["Patent", "Trademark", "Copyright", "License"], answer: 2 },
        { q: "The practice of gaining unauthorized access to data in a system is:", options: ["Phishing", "Hacking", "Spamming", "Encryption"], answer: 1 },
        { q: "A secret code used to prevent unauthorized access to a computer or account is a:", options: ["Username", "Password", "Encryption", "Firewall"], answer: 1 },
        { q: "The process of converting data into a code to prevent unauthorized access during transmission is:", options: ["Compression", "Encryption", "Extraction", "Formatting"], answer: 1 },

        // LOGIC GATES
        { q: "Which logic gate gives a high output (1) only if BOTH inputs are high (1)?", options: ["OR gate", "NOT gate", "AND gate", "NAND gate"], answer: 2 },
        { q: "A logic gate that reverses the input (turns 1 to 0 and 0 to 1) is the:", options: ["AND gate", "OR gate", "NOT gate", "XOR gate"], answer: 2 },
        { q: "Which gate gives a high output (1) if AT LEAST ONE input is high (1)?", options: ["AND gate", "OR gate", "NAND gate", "NOR gate"], answer: 1 },

        // REVISION & GENERAL KNOWLEDGE
        { q: "Who is widely regarded as the 'Father of the Computer'?", options: ["Bill Gates", "Steve Jobs", "Charles Babbage", "Alan Turing"], answer: 2 },
        { q: "The capacity of a standard CD-ROM is approximately:", options: ["1.44 MB", "700 MB", "4.7 GB", "1 TB"], answer: 1 },
        { q: "Which device is used to connect a computer to the internet via a telephone line?", options: ["Switch", "Router", "Modem", "Hub"], answer: 2 },
        { q: "The binary equivalent of the decimal number 5 is:", options: ["100", "101", "110", "111"], answer: 1 },
        { q: "Which of the following is NOT a type of computer monitor?", options: ["LCD", "LED", "CRT", "CPU"], answer: 3 },
        { q: "A computer on a network that requests resources from another computer is a:", options: ["Server", "Client", "Node", "Bridge"], answer: 1 },
        { q: "The first mechanical counting device was the:", options: ["Calculator", "Abacus", "Slide Rule", "Pascaline"], answer: 1 },
        { q: "Which company developed the Java programming language?", options: ["Microsoft", "Sun Microsystems", "Apple", "Google"], answer: 1 },
        { q: "The term 'URL' stands for:", options: ["Uniform Resource Locator", "Universal Radio Link", "United Road Line", "Under Real Location"], answer: 0 },
        { q: "A billion bytes is approximately equal to one:", options: ["Megabyte (MB)", "Gigabyte (GB)", "Terabyte (TB)", "Kilobyte (KB)"], answer: 1 },
        { q: "The primary purpose of a UPS (Uninterruptible Power Supply) is to:", options: ["Increase internet speed", "Provide backup power during a failure", "Clean the computer monitor", "Install new software"], answer: 1 }
    ],
    "History": [
        // PRE-COLONIAL NIGERIAN HISTORY & EMPIRES
        { q: "The Nok Culture is famous for its early use of:", options: ["Bronze", "Iron", "Gold", "Silver"], answer: 1 },
        { q: "The legendary founder of the Hausa states was:", options: ["Uthman Dan Fodio", "Bayajidda", "Oduduwa", "Mai Idris Alooma"], answer: 1 },
        { q: "The capital of the Old Oyo Empire was:", options: ["Ibadan", "Oyo-Ile", "Ile-Ife", "Abeokuta"], answer: 1 },
        { q: "The administrative head of the Old Oyo Empire was the:", options: ["Ooni", "Oba", "Alaafin", "Obi"], answer: 2 },
        { q: "In the pre-colonial Igbo society, political authority was largely:", options: ["Centralized", "Monarchical", "Decentralized", "Autocratic"], answer: 2 },
        { q: "The Benin Empire became famous for its exquisite artwork made of:", options: ["Wood", "Bronze", "Clay", "Stone"], answer: 1 },
        { q: "The Jihad of 1804 in Northern Nigeria was led by:", options: ["Al-Kanemi", "Uthman Dan Fodio", "Bello", "Abubakar Atiku"], answer: 1 },
        { q: "The Kanem-Borno Empire reached its peak under the reign of:", options: ["Mai Idris Alooma", "Mai Dunama", "Sarki Rumfa", "Queen Amina"], answer: 0 },
        { q: "The pre-colonial city-state known for its famous female ruler, Queen Amina, was:", options: ["Kano", "Zaria", "Katsina", "Gobir"], answer: 1 },

        // TRANS-SAHARAN & TRANS-ATLANTIC TRADE
        { q: "The main item of trade brought from North Africa across the Sahara was:", options: ["Gold", "Salt", "Ivory", "Slaves"], answer: 1 },
        { q: "The Trans-Saharan trade contributed to the spread of which religion in West Africa?", options: ["Christianity", "Islam", "Traditional Religion", "Buddhism"], answer: 1 },
        { q: "The 'Middle Passage' refers to the journey of slaves across the:", options: ["Indian Ocean", "Mediterranean Sea", "Atlantic Ocean", "Red Sea"], answer: 2 },
        { q: "The British government officially abolished the slave trade in:", options: ["1807", "1833", "1861", "1900"], answer: 0 },
        { q: "The primary motive for the early European explorers in Africa was:", options: ["Religious conversion", "Economic gain/Trade", "Colonization", "Scientific research"], answer: 1 },

        // COLONIAL RULE IN NIGERIA
        { q: "The Royal Niger Company was granted a charter to trade in Nigeria in:", options: ["1861", "1886", "1900", "1914"], answer: 1 },
        { q: "The amalgamation of the Northern and Southern Protectorates of Nigeria took place in:", options: ["1900", "1906", "1914", "1922"], answer: 2 },
        { q: "The first British Governor-General of Nigeria was:", options: ["Lord Lugard", "Sir Hugh Clifford", "Lord Milverton", "Sir James Robertson"], answer: 0 },
        { q: "The system of 'Indirect Rule' was most successful in which part of Nigeria?", options: ["The East", "The West", "The North", "The Delta"], answer: 2 },
        { q: "The policy of 'Assimilation' was used by which colonial power in West Africa?", options: ["Britain", "Portugal", "France", "Germany"], answer: 2 },
        { q: "The Berlin Conference of 1884-1885 was held to:", options: ["End the slave trade", "Partition Africa among European powers", "Promote African culture", "Establish the United Nations"], answer: 1 },

        // NATIONALISM & INDEPENDENCE
        { q: "The 'Father of Nigerian Nationalism' is generally considered to be:", options: ["Nnamdi Azikiwe", "Obafemi Awolowo", "Herbert Macaulay", "Ahmadu Bello"], answer: 2 },
        { q: "The first political party formed in Nigeria was the:", options: ["NNDP", "NCNC", "NPC", "AG"], answer: 0 },
        { q: "Nigeria achieved independence from Britain on:", options: ["October 1, 1960", "October 1, 1963", "May 29, 1999", "January 15, 1966"], answer: 0 },
        { q: "The first Prime Minister of independent Nigeria was:", options: ["Nnamdi Azikiwe", "Abubakar Tafawa Balewa", "Ahmadu Bello", "Obafemi Awolowo"], answer: 1 },
        { q: "The Richards Constitution of 1946 was significant because it:", options: ["Introduced elective principle", "Created three regions", "Abolished indirect rule", "Gave Nigeria independence"], answer: 1 },
        { q: "The first Governor-General of independent Nigeria was:", options: ["Lord Lugard", "Sir James Robertson", "Dr. Nnamdi Azikiwe", "Sir Shehu Shagari"], answer: 2 },

        // POST-INDEPENDENCE NIGERIA
        { q: "Nigeria became a Republic in the year:", options: ["1960", "1963", "1970", "1979"], answer: 1 },
        { q: "The first military coup in Nigeria occurred on:", options: ["January 15, 1966", "July 29, 1966", "July 29, 1975", "December 31, 1983"], answer: 0 },
        { q: "The leader of the first military coup in Nigeria was:", options: ["Aguiyi-Ironsi", "Chukwuma Nzeogwu", "Yakubu Gowon", "Murtala Muhammed"], answer: 1 },
        { q: "The Nigerian Civil War (Biafran War) lasted from:", options: ["1960-1963", "1966-1969", "1967-1970", "1975-1979"], answer: 2 },
        { q: "The policy of 'No Victor, No Vanquished' was declared by:", options: ["Emeka Ojukwu", "Yakubu Gowon", "Murtala Muhammed", "Olusegun Obasanjo"], answer: 1 },
        { q: "The second republic (1979-1983) was led by:", options: ["Nnamdi Azikiwe", "Shehu Shagari", "Ibrahim Babangida", "Sani Abacha"], answer: 1 },
        { q: "Nigeria returned to democratic rule (the Fourth Republic) in:", options: ["1990", "1993", "1999", "2003"], answer: 2 },

        // WORLD HISTORY & INTERNATIONAL RELATIONS
        { q: "The First World War began in:", options: ["1910", "1914", "1918", "1939"], answer: 1 },
        { q: "The League of Nations was replaced after WWII by the:", options: ["OAU", "United Nations", "NATO", "European Union"], answer: 1 },
        { q: "The Cold War was a period of ideological tension between the USA and:", options: ["China", "Germany", "Soviet Union (USSR)", "Japan"], answer: 2 },
        { q: "The Organization of African Unity (OAU) was formed in 1963 in:", options: ["Lagos", "Accra", "Addis Ababa", "Nairobi"], answer: 2 },
        { q: "The policy of 'Apartheid' was practiced in which country?", options: ["Nigeria", "Zimbabwe", "South Africa", "Kenya"], answer: 2 },
        { q: "Nelson Mandela was the first black president of South Africa, elected in:", options: ["1990", "1992", "1994", "1999"], answer: 2 },

        // REGIONAL & PAN-AFRICAN HISTORY
        { q: "The Ghana Empire was famous for its abundance of:", options: ["Oil", "Gold", "Ivory", "Diamonds"], answer: 1 },
        { q: "The Mali Empire reached its greatest extent under:", options: ["Sundiata Keita", "Mansa Musa", "Sunni Ali", "Askia Muhammad"], answer: 1 },
        { q: "The Songhai Empire was eventually defeated by invaders from:", options: ["Egypt", "Morocco", "Europe", "Sudan"], answer: 1 },
        { q: "The famous university center in the Songhai Empire was:", options: ["Cairo", "Timbuktu", "Kano", "Zanzibar"], answer: 1 },
        { q: "The primary aim of Pan-Africanism was to:", options: ["Promote trade with Europe", "Unite all people of African descent", "Spread Christianity", "Divide Africa into smaller states"], answer: 1 },

        // MISCELLANEOUS & CULTURE
        { q: "The study of history through physical remains is called:", options: ["Anthropology", "Archaeology", "Geology", "Sociology"], answer: 1 },
        { q: "The 'Scramble for Africa' refers to the period of rapid:", options: ["Decolonization", "European colonization", "African migration", "Religious expansion"], answer: 1 },
        { q: "Who was the first woman to drive a car in Nigeria?", options: ["Funmilayo Ransome-Kuti", "Margaret Ekpo", "Queen Amina", "Ladi Kwali"], answer: 0 },
        { q: "The 1977 Second World Black and African Festival of Arts and Culture (FESTAC) was held in:", options: ["Dakar", "Accra", "Lagos", "Addis Ababa"], answer: 2 },
        { q: "The ancient city known for its 'leaning walls' in Nigeria is:", options: ["Zaria", "Kano", "Benin", "Ile-Ife"], answer: 1 },
        { q: "Which Nigerian leader is credited with the 'Green Revolution' program?", options: ["Yakubu Gowon", "Shehu Shagari", "Ibrahim Babangida", "Muhammadu Buhari"], answer: 1 },
        { q: "The first capital of independent Nigeria was:", options: ["Abuja", "Lagos", "Ibadan", "Kaduna"], answer: 1 },
        { q: "The federal capital was officially moved from Lagos to Abuja in:", options: ["1976", "1985", "1991", "1999"], answer: 2 },
        { q: "Which explorer 'discovered' the source of the River Niger (reaching it from the interior)?", options: ["Mungo Park", "Richard Lander", "Clapperton", "Barth"], answer: 0 },
        { q: "The Richards Constitution of 1946 introduced regionalism by creating:", options: ["Two regions", "Three regions", "Four regions", "Twelve states"], answer: 1 },
        { q: "The United Nations Day is celebrated annually on:", options: ["October 1", "October 24", "December 10", "May 1"], answer: 1 },
        { q: "The current Nigerian national anthem, 'Arise, O Compatriots,' was adopted in:", options: ["1960", "1963", "1978", "1999"], answer: 2 }
    ],
    "Fine Art": [
        // ELEMENTS AND PRINCIPLES OF ART
        { q: "Which of the following is NOT an element of art?", options: ["Line", "Balance", "Color", "Texture"], answer: 1 },
        { q: "The lightness or darkness of a color is referred to as its:", options: ["Hue", "Intensity", "Value", "Tint"], answer: 2 },
        { q: "A mark made by a moving point is a:", options: ["Shape", "Line", "Form", "Space"], answer: 1 },
        { q: "The area around, between, or within components of a piece of art is:", options: ["Form", "Mass", "Space", "Volume"], answer: 2 },
        { q: "Which principle of design deals with the distribution of visual weight?", options: ["Rhythm", "Contrast", "Balance", "Emphasis"], answer: 2 },
        { q: "The repetition of elements to create a sense of movement is:", options: ["Unity", "Rhythm", "Proportion", "Pattern"], answer: 1 },
        { q: "Colors that are opposite each other on the color wheel are:", options: ["Analogous", "Monochromatic", "Complementary", "Primary"], answer: 2 },
        { q: "The primary colors are:", options: ["Orange, Green, Violet", "Red, Yellow, Blue", "Red, White, Black", "Green, Blue, Yellow"], answer: 1 },
        { q: "Mixing two primary colors in equal proportions produces a:", options: ["Tertiary color", "Secondary color", "Neutral color", "Tint"], answer: 1 },
        { q: "The surface quality of an object that can be felt or seen is:", options: ["Value", "Texture", "Form", "Shape"], answer: 3 },

        // NIGERIAN ART HISTORY
        { q: "Which ancient Nigerian art culture is famous for its terra-cotta human heads with 'perforated' eyes?", options: ["Ife", "Nok", "Benin", "Igbo-Ukwu"], answer: 1 },
        { q: "The art of Ife is best known for its:", options: ["Abstract wood carvings", "Naturalistic bronze and terra-cotta heads", "Geometric pottery", "Intricate beadwork"], answer: 1 },
        { q: "The Benin Empire is world-renowned for its bronze casting using the:", options: ["Cire-perdue (Lost wax) process", "Sand casting method", "Cold forging technique", "Welding process"], answer: 0 },
        { q: "The artistic tradition of Igbo-Ukwu is characterized by its use of:", options: ["Leaded bronze with intricate surface decorations", "Ivory tusks", "Giant stone monoliths", "Mud sculptures"], answer: 0 },
        { q: "The decorative body painting practiced by the Igbo people is called:", options: ["Uli", "Tattoo", "Scarification", "Batik"], answer: 0 },
        { q: "Which Nigerian artist is famous for his 'Enwonwu' sculptures and the 'Sango' statue in Lagos?", options: ["Bruce Onobrakpeya", "Ben Enwonwu", "Ladi Kwali", "Aina Onabolu"], answer: 1 },
        { q: "The famous Nigerian potter whose image appears on the 20 Naira note is:", options: ["Felicia Adetowun", "Ladi Kwali", "Nike Davies-Okundaye", "Olabisi Onabanjo"], answer: 1 },
        { q: "The 'Oshogbo School of Art' was pioneered by Ulli Beier and:", options: ["Ben Enwonwu", "Susanne Wenger", "Wole Soyinka", "Chinua Achebe"], answer: 1 },
        { q: "Which artist is known for the 'plastograph' printmaking technique?", options: ["Jimoh Buraimoh", "Bruce Onobrakpeya", "Yussuf Grillo", "Demas Nwoko"], answer: 1 },
        { q: "The 'Zaria Rebels' were a group of art students who advocated for:", options: ["European academic art", "Natural Synthesis (combining African and Western styles)", "Abstract Expressionism", "Digital Art"], answer: 1 },

        // GLOBAL ART HISTORY
        { q: "The period of 'rebirth' in European art and learning (14th-17th century) is the:", options: ["Baroque", "Renaissance", "Gothic", "Romanticism"], answer: 1 },
        { q: "The artist who painted the 'Mona Lisa' and 'The Last Supper' was:", options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"], answer: 2 },
        { q: "Who painted the ceiling of the Sistine Chapel?", options: ["Leonardo da Vinci", "Michelangelo", "Rembrandt", "Vincent van Gogh"], answer: 1 },
        { q: "The art movement characterized by small, thin brush strokes and an emphasis on light is:", options: ["Surrealism", "Cubism", "Impressionism", "Fauvism"], answer: 2 },
        { q: "Pablo Picasso is the co-founder of which art movement?", options: ["Impressionism", "Cubism", "Surrealism", "Pop Art"], answer: 1 },
        { q: "Vincent van Gogh's famous painting of a night sky is titled:", options: ["The Scream", "Starry Night", "Sunflowers", "Guernica"], answer: 1 },

        // TECHNIQUES AND MEDIA
        { q: "The technique of creating an image by gluing various materials onto a surface is:", options: ["Mosaic", "Collage", "Fresco", "Gouache"], answer: 1 },
        { q: "A mural painting technique involving pigment applied to wet plaster is:", options: ["Tempera", "Fresco", "Oil painting", "Acrylic"], answer: 1 },
        { q: "The art of beautiful handwriting is:", options: ["Typography", "Calligraphy", "Cartography", "Photography"], answer: 1 },
        { q: "A three-dimensional work of art is a:", options: ["Painting", "Sculpture", "Drawing", "Print"], answer: 1 },
        { q: "The removal of material (like stone or wood) to create a sculpture is a:", options: ["Modelling process", "Subtractive process", "Additive process", "Casting process"], answer: 1 },
        { q: "In pottery, a furnace used for firing clay is a:", options: ["Oven", "Kiln", "Forge", "Incinerator"], answer: 1 },
        { q: "The process of making multiple copies of an artwork from a master plate is:", options: ["Sketching", "Printmaking", "Tracing", "Illustration"], answer: 1 },
        { q: "A drawing of an arrangement of inanimate objects (like fruit or bottles) is a:", options: ["Landscape", "Portrait", "Still Life", "Life drawing"], answer: 2 },

        // GRAPHIC DESIGN AND TEXTILES
        { q: "A recognizable graphic symbol used to identify a company or brand is a:", options: ["Poster", "Logo", "Banner", "Billboard"], answer: 1 },
        { q: "The art of arranging type (letters) to make written language legible and appealing is:", options: ["Calligraphy", "Typography", "Photography", "Lithography"], answer: 1 },
        { q: "The traditional Yoruba cloth dyeing technique using indigo is:", options: ["Batik", "Adire", "Kente", "Akwete"], answer: 1 },
        { q: "The wax-resist dyeing technique used on fabric is:", options: ["Tie-dye", "Batik", "Screen printing", "Embroidery"], answer: 1 },
        { q: "Which of the following is a primary material for weaving?", options: ["Clay", "Yarn", "Ink", "Stone"], answer: 1 },

        // REVISION AND GENERAL KNOWLEDGE
        { q: "A person who organizes and manages an art gallery or museum is a:", options: ["Artist", "Curator", "Critic", "Sculptor"], answer: 1 },
        { q: "The study of the nature and beauty of art is:", options: ["Anatomy", "Aesthetics", "Anthropology", "Archaeology"], answer: 1 },
        { q: "A quick, rough drawing produced to capture the essentials of a subject is a:", options: ["Masterpiece", "Sketch", "Portrait", "Engraving"], answer: 1 },
        { q: "The relative size of parts within a whole is:", options: ["Scale", "Proportion", "Unity", "Balance"], answer: 1 },
        { q: "Which of the following is used for shading in pencil drawing?", options: ["Blending stump", "Eraser", "Fixative", "Canvas"], answer: 0 },
        { q: "A drawing of a person's face is a:", options: ["Still life", "Portrait", "Landscape", "Abstract"], answer: 1 },
        { q: "The material used to make a sculpture or painting (e.g., oil, clay, wood) is the:", options: ["Subject", "Style", "Medium", "Theme"], answer: 2 },
        { q: "In color theory, black, white, and gray are considered:", options: ["Primary colors", "Secondary colors", "Neutral colors", "Warm colors"], answer: 2 },
        { q: "The point in a drawing where parallel lines appear to converge is the:", options: ["Focal point", "Vanishing point", "Center point", "Horizon point"], answer: 1 },
        { q: "Which of the following is a type of relief sculpture?", options: ["Statue in the round", "Bas-relief", "Installation", "Mobile"], answer: 1 },
        { q: "The 'Golden Ratio' is a mathematical proportion often used in art to achieve:", options: ["Contrast", "Aesthetic harmony", "Darkness", "Scale"], answer: 1 }
    ],
    "Music": [
        // RUDIMENTS AND THEORY
        { q: "The five lines and four spaces on which music is written is called a:", options: ["Staff/Stave", "Clef", "Bar line", "Scale"], answer: 0 },
        { q: "Which clef is also known as the 'G' clef?", options: ["Bass clef", "Treble clef", "Alto clef", "Tenor clef"], answer: 1 },
        { q: "The distance in pitch between two notes is an:", options: ["Interval", "Octave", "Accidental", "Inversion"], answer: 0 },
        { q: "A sign placed before a note to raise its pitch by a semitone is a:", options: ["Flat", "Sharp", "Natural", "Double flat"], answer: 1 },
        { q: "A major scale consists of how many notes before the octave repeats?", options: ["5", "7", "8", "12"], answer: 1 },
        { q: "The time signature 4/4 is also known as:", options: ["Common time", "Cut time", "Compound time", "Simple triple"], answer: 0 },
        { q: "Which of the following represents a 'Crotchet' rest?", options: ["A hat-like shape sitting on the line", "A squiggle shape", "A small circle", "A vertical bar"], answer: 1 },
        { q: "In music, 'Piano' (p) means to play:", options: ["Loudly", "Softly", "Moderately", "Very fast"], answer: 1 },
        { q: "A triad consists of how many notes?", options: ["2", "3", "4", "5"], answer: 1 },
        { q: "The speed at which a piece of music is played is the:", options: ["Rhythm", "Tempo", "Pitch", "Texture"], answer: 1 },

        // AFRICAN MUSIC AND INSTRUMENTS
        { q: "Which of the following is a membranophone?", options: ["Talking drum", "Xylophone", "Flute", "Sekere"], answer: 0 },
        { q: "The 'talking drum' is most common among which ethnic group?", options: ["Igbo", "Yoruba", "Hausa", "Ijaw"], answer: 1 },
        { q: "An African musical instrument made of a gourd covered in a net of beads is the:", options: ["Ogene", "Sekere", "Kora", "Kakaki"], answer: 1 },
        { q: "The 'Kora' is a popular string instrument from:", options: ["West Africa", "East Africa", "North Africa", "South Africa"], answer: 0 },
        { q: "A common feature of African traditional music where a leader sings and a group responds is:", options: ["Monophony", "Call and response", "Polyphony", "Homophony"], answer: 1 },
        { q: "The 'Kakaki' is a long metal trumpet associated with the royalty of the:", options: ["Yoruba", "Hausa/Fulani", "Igbo", "Edo"], answer: 1 },
        { q: "Which of these is an idiophone?", options: ["Ogene (Gong)", "Bata drum", "Oja (Flute)", "Goje"], answer: 0 },
        { q: "Traditional African music is primarily used for:", options: ["Entertainment only", "Social and religious ceremonies", "Recording purposes", "Commercial gain"], answer: 1 },

        // WESTERN MUSIC HISTORY AND COMPOSERS
        { q: "The Baroque period of music history roughly spanned:", options: ["1450-1600", "1600-1750", "1750-1820", "1820-1900"], answer: 1 },
        { q: "Who is known as the 'Father of the Symphony'?", options: ["Bach", "Mozart", "Haydn", "Beethoven"], answer: 2 },
        { q: "The child prodigy who composed 'The Marriage of Figaro' was:", options: ["Beethoven", "Mozart", "Handel", "Vivaldi"], answer: 1 },
        { q: "The composer who became deaf but continued to write masterpieces was:", options: ["Bach", "Mozart", "Schubert", "Beethoven"], answer: 3 },
        { q: "The 'Messiah' oratorio was composed by:", options: ["G.F. Handel", "J.S. Bach", "Joseph Haydn", "Felix Mendelssohn"], answer: 0 },
        { q: "The period of music characterized by emotion and individualism (1820-1900) is the:", options: ["Classical", "Romantic", "Renaissance", "Baroque"], answer: 1 },

        // NIGERIAN ART MUSIC AND CONTEMPORARY MUSIC
        { q: "The 'Father of Nigerian Art Music' is:", options: ["Fela Kuti", "Fela Sowande", "Lakin Akintola", "T.K.E. Phillips"], answer: 1 },
        { q: "Who is the creator of the 'Afrobeat' genre?", options: ["Sunny Ade", "Fela Anikulapo-Kuti", "Osita Osadebe", "Rex Lawson"], answer: 1 },
        { q: "The 'Highlife' music style originated in:", options: ["Nigeria", "Ghana", "Sierra Leone", "Liberia"], answer: 1 },
        { q: "A prominent Nigerian composer known for 'Akinla' and 'African Pianism' is:", options: ["Akin Euba", "Lazarus Ekwueme", "Sam Akpabot", "Ayyo Bankole"], answer: 0 },
        { q: "Which Nigerian artist is famous for 'Juju' music?", options: ["Ebenezer Obey", "King Sunny Ade", "Both A and B", "Oliver de Coque"], answer: 2 },

        // MUSICAL FORMS AND TEXTURES
        { q: "A musical texture with a single melodic line without accompaniment is:", options: ["Monophonic", "Homophonic", "Polyphonic", "Heterophonic"], answer: 0 },
        { q: "A musical form consisting of two sections (A-B) is:", options: ["Ternary", "Binary", "Rondo", "Sonata"], answer: 1 },
        { q: "The 'ABA' form is known as:", options: ["Binary", "Ternary", "Theme and Variations", "Fugue"], answer: 1 },
        { q: "The highness or lowness of a sound is its:", options: ["Volume", "Pitch", "Timbre", "Duration"], answer: 1 },
        { q: "The quality of sound that distinguishes one instrument from another is:", options: ["Pitch", "Intensity", "Timbre (Tone color)", "Frequency"], answer: 2 },

        // REVISION AND GENERAL KNOWLEDGE
        { q: "Which instrument belongs to the Woodwind family?", options: ["Trumpet", "Flute", "Violin", "Cello"], answer: 1 },
        { q: "The lowest female singing voice is the:", options: ["Soprano", "Mezzo-soprano", "Alto", "Tenor"], answer: 2 },
        { q: "The highest male singing voice is the:", options: ["Bass", "Baritone", "Tenor", "Alto"], answer: 2 },
        { q: "A group of people singing together is a:", options: ["Orchestra", "Band", "Choir", "Ensemble"], answer: 2 },
        { q: "A large group of instrumentalists, including strings, woodwinds, brass, and percussion, is an:", options: ["Orchestra", "Choir", "Quartet", "Trio"], answer: 0 },
        { q: "The person who directs an orchestra or choir is the:", options: ["Composer", "Conductor", "Producer", "Soloist"], answer: 1 },
        { q: "How many lines are in a musical staff?", options: ["4", "5", "6", "3"], answer: 1 },
        { q: "Which note value is equal to two crotchets?", options: ["Semibreve", "Minim", "Quaver", "Semiquaver"], answer: 1 },
        { q: "The vertical line that separates measures in music is a:", options: ["Staff", "Bar line", "Clef", "Tie"], answer: 1 },
        { q: "What is the interval between C and the next C above it?", options: ["Fifth", "Seventh", "Octave", "Third"], answer: 2 },
        { q: "An 'accidental' that cancels previous sharps or flats is a:", options: ["Sharp", "Flat", "Natural", "Key signature"], answer: 2 },
        { q: "The small dots placed after a note to increase its duration by half is called a:", options: ["Staccato", "Dotted note", "Accent", "Slur"], answer: 1 },
        { q: "Playing notes in a smooth, connected manner is called:", options: ["Staccato", "Legato", "Vibrato", "Tremolo"], answer: 1 },
        { q: "Playing notes in a short, detached manner is:", options: ["Legato", "Staccato", "Glissando", "Pizzicato"], answer: 1 },
        { q: "Which of the following is a brass instrument?", options: ["Clarinet", "Oboe", "Trombone", "Bassoon"], answer: 2 },
        { q: "The piano is both a string and a ______ instrument.", options: ["Woodwind", "Percussion", "Brass", "Electronic"], answer: 1 },
        { q: "A 'Duet' is a musical performance by ______ people.", options: ["One", "Two", "Three", "Four"], answer: 1 },
        { q: "A 'Quartet' consists of ______ performers.", options: ["Two", "Three", "Four", "Five"], answer: 2 },
        { q: "The national anthem of Nigeria was written by a group of five people, but the music was composed by:", options: ["Fela Sowande", "Benedict Odiase", "Pa Benedict", "Lazarus Ekwueme"], answer: 1 },
        { q: "The 'Ogenne' is a type of ______ instrument used by the Igbos.", options: ["String", "Wind", "Metal gong (Idiophone)", "Drum"], answer: 2 },
        { q: "Music with no strict meter or regular rhythm is said to be in:", options: ["Strict time", "Free time", "Syncopation", "Compound time"], answer: 1 },
        { q: "A sudden emphasis on a particular note is called an:", options: ["Accent", "Interval", "Octave", "Harmony"], answer: 0 },
        { q: "The simultaneous sounding of two or more notes is:", options: ["Melody", "Rhythm", "Harmony", "Texture"], answer: 2 },
        { q: "A major chord sounds 'happy', while a minor chord often sounds:", options: ["Loud", "Fast", "Sad/Melancholy", "Angry"], answer: 2 },
        { q: "The home note or central pitch of a piece of music is the:", options: ["Dominant", "Tonic", "Subdominant", "Leading tone"], answer: 1 },
        { q: "The space between two bar lines is called a:", options: ["Staff", "Measure (Bar)", "Phrase", "Verse"], answer: 1 }
    ],
};