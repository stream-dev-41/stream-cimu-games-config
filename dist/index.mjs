var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/common.ts
import { z as z7 } from "zod";

// src/card-dash.ts
var card_dash_exports = {};
__export(card_dash_exports, {
  game: () => game,
  gameParams: () => gameParams,
  message: () => message
});
import { z } from "zod";
var gameParams = z.object({
  level: z.number().nonnegative().int().min(1).max(2).describe("game difficulty")
});
var message = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("[game]:initialized").describe(
      "Should be the first event in the sequence, tells Stream when to send initial params"
    )
  }),
  z.object({
    kind: z.literal("[host]:initial-params").describe("Setup game with game params, after initialised"),
    userId: z.string().uuid("unique userId"),
    sessionId: z.string().describe("unique for each game session"),
    gameDurationInSeconds: z.number().nonnegative().int().describe("the duration of the game in seconds"),
    gameParams
  }),
  z.object({
    kind: z.literal("[game]:is-ready").describe(
      "Sent after the game has been fully setup include loading asset/logic/etc...In other words, ready to play"
    )
  }),
  z.object({
    kind: z.literal("[host]:start-game").describe(
      "Start the game immediately, there should be no delay time after this event is sent to let the players play the game"
    ),
    timeLeftInSeconds: z.number().nonnegative().int().describe(
      "how many seconds left before the game will end, should be 0 <= timeLeft <= gameDurationInSeconds"
    )
  }),
  z.object({
    kind: z.literal("[game]:ended").describe(
      "Game time is up or the player finishes early, then this event is sent"
    ),
    scores: z.number().nonnegative().int(),
    pairs: z.number().nonnegative().int(),
    mistakes: z.number().nonnegative().int(),
    elapsedTimeInSeconds: z.number().nonnegative().int().describe(
      "Number of seconds elapsed since player stared the game until end or player finished it, should be 0 <= elapsed <= timeLeft"
    )
  })
]).and(
  z.object({
    version: z.literal(1).describe(
      "this is to make sure our code knows how to handle if schema updated"
    )
  })
);
var game = {
  id: "CIMU_CARD_DASH",
  url: "https://stream.342games.com",
  name: "Card Dash",
  shortDescription: "Match the pairs as fast as you can",
  message,
  // will be sanitized
  descriptionInHtml: "A 3x4 board of cards will be displayed face down. Fans will have to memorize and try their best to match the hidden pairs on the board as fast as possible before the time runs out.",
  launchInstructionInHtml: "Normal mode: Each pair is accompanied with a distinct background color to aid with visual memory<br/>Hard mode: Each pair has the same background color, making it more challenging for fans",
  scoringRulesInHtml: "Fans are scored based on speed and accuracy. They get 250 Base Points for passing and 500 Bonus for making into Top 100."
};

// src/mathcraft.ts
var mathcraft_exports = {};
__export(mathcraft_exports, {
  game: () => game2,
  gameParams: () => gameParams2,
  message: () => message2
});
import { z as z2 } from "zod";
var gameParams2 = z2.object({
  level: z2.number().nonnegative().int().min(1).max(3).describe("game difficulty")
});
var message2 = z2.discriminatedUnion("kind", [
  z2.object({
    kind: z2.literal("[game]:initialized").describe(
      "Should be the first event in the sequence, tells Stream when to send initial params"
    )
  }),
  z2.object({
    kind: z2.literal("[host]:initial-params").describe("Setup game with game params, after initialised"),
    userId: z2.string().uuid("unique userId"),
    sessionId: z2.string().describe("unique for each game session"),
    gameDurationInSeconds: z2.number().nonnegative().int().describe("the duration of the game in seconds"),
    gameParams: gameParams2
  }),
  z2.object({
    kind: z2.literal("[game]:is-ready").describe(
      "Sent after the game has been fully setup include loading asset/logic/etc...In other words, ready to play"
    )
  }),
  z2.object({
    kind: z2.literal("[host]:start-game").describe(
      "Start the game immediately, there should be no delay time after this event is sent to let the players play the game"
    ),
    timeLeftInSeconds: z2.number().nonnegative().int().describe(
      "how many seconds left before the game will end, should be 0 <= timeLeft <= gameDurationInSeconds"
    )
  }),
  z2.object({
    kind: z2.literal("[game]:ended").describe(
      "Game time is up or the player finishes early, then this event is sent"
    ),
    scores: z2.number().nonnegative().int(),
    correctAnswers: z2.number().nonnegative().int().describe("The number of questions answered correctly in the game."),
    mistakes: z2.number().nonnegative().int(),
    elapsedTimeInSeconds: z2.number().nonnegative().int().describe(
      "Number of seconds elapsed since player stared the game until end or player finished it, should be 0 <= elapsed <= timeLeft"
    )
  })
]).and(
  z2.object({
    version: z2.literal(1).describe(
      "this is to make sure our code knows how to handle if schema updated"
    )
  })
);
var game2 = {
  id: "CIMU_MATH_CRAFT",
  url: "https://stream-math.342games.com",
  name: "MathCraft",
  shortDescription: "Remove the right blocks to reach the answer",
  message: message2,
  // will be sanitized
  descriptionInHtml: "Users will select the right arithmetic blocks to eliminate in order to match the final answer. They will need to eliminate 1-2 blocks depending on the difficulty level. They need to correctly answer 2 rounds to earn rewards.",
  launchInstructionInHtml: "Select the duration of the StreamDrop and it\u2019s difficulty level.",
  scoringRulesInHtml: "Fans are scored based on speed and equations solved correctly. They get 250 base gems for passing and 500 bonus gems for making into Top 100."
};

// src/matrix-run.ts
var matrix_run_exports = {};
__export(matrix_run_exports, {
  game: () => game3,
  gameParams: () => gameParams3,
  message: () => message3
});
import { z as z3 } from "zod";
var gameParams3 = z3.object({
  level: z3.number().nonnegative().int().min(1).max(2).describe("game difficulty")
});
var message3 = z3.discriminatedUnion("kind", [
  z3.object({
    kind: z3.literal("[game]:initialized").describe(
      "Should be the first event in the sequence, tells Stream when to send initial params"
    )
  }),
  z3.object({
    kind: z3.literal("[host]:key").describe("Send key event to the game, e.g. keyboard or controller")
  }),
  z3.object({
    kind: z3.literal("[host]:initial-params").describe("Setup game with game params, after initialised"),
    userId: z3.string().uuid("unique userId"),
    sessionId: z3.string().describe("unique for each game session"),
    gameDurationInSeconds: z3.number().nonnegative().int().describe("the duration of the game in seconds"),
    gameParams: gameParams3
  }),
  z3.object({
    kind: z3.literal("[game]:is-ready").describe(
      "Sent after the game has been fully setup include loading asset/logic/etc...In other words, ready to play"
    )
  }),
  z3.object({
    kind: z3.literal("[host]:start-game").describe(
      "Start the game immediately, there should be no delay time after this event is sent to let the players play the game"
    ),
    timeLeftInSeconds: z3.number().nonnegative().int().describe(
      "how many seconds left before the game will end, should be 0 <= timeLeft <= gameDurationInSeconds"
    )
  }),
  z3.object({
    kind: z3.literal("[game]:ended").describe(
      "Game time is up or the player finishes early, then this event is sent"
    ),
    scores: z3.number().nonnegative().int(),
    elapsedTimeInSeconds: z3.number().nonnegative().int().describe(
      "Number of seconds elapsed since player stared the game until end or player finished it, should be 0 <= elapsed <= timeLeft"
    )
  })
]).and(
  z3.object({
    version: z3.literal(1).describe(
      "this is to make sure our code knows how to handle if schema updated"
    )
  })
);
var game3 = {
  id: "CIMU_MATRIX_RUN",
  url: "https://stream-run30.342games.com",
  name: "Matrix Run",
  shortDescription: "Run and jump as far as your can",
  message: message3,
  // will be sanitized
  descriptionInHtml: "Avoid the obstacles and escape as far as possible in the matrix. The speed increases with distance travelled. ",
  launchInstructionInHtml: "Normal mode: No flying obstacles<br/>Hard mode: Flying obstacles introduced",
  scoringRulesInHtml: "Fans are scored based on the final distance achieved"
};

// src/surge-run.ts
var surge_run_exports = {};
__export(surge_run_exports, {
  game: () => game4,
  gameParams: () => gameParams4,
  message: () => message4
});
import { z as z4 } from "zod";
var gameParams4 = z4.object({
  bestScores: z4.number().int().min(0).describe("used to display user's personal best score"),
  device: z4.enum(["mobile", "desktop"])
});
var message4 = z4.discriminatedUnion("kind", [
  z4.object({
    kind: z4.literal("[game]:initialized").describe(
      "Should be the first event in the sequence, tells Stream when to send initial params"
    )
  }),
  z4.object({
    kind: z4.literal("[host]:key").describe("Send key event to the game, e.g. keyboard or controller")
  }),
  z4.object({
    kind: z4.literal("[host]:initial-params").describe("Setup game with game params, after initialised"),
    userId: z4.string().uuid("unique userId"),
    sessionId: z4.string().describe("unique for each game session"),
    gameParams: gameParams4
  }),
  z4.object({
    kind: z4.literal("[game]:is-ready").describe(
      "Sent after the game has been fully setup include loading asset/logic/etc...In other words, ready to play"
    )
  }),
  z4.object({
    kind: z4.literal("[host]:start-game").describe(
      "Start the game immediately, there should be no delay time after this event is sent to let the players play the game"
    )
  }),
  z4.object({
    kind: z4.literal("[game]:ended").describe(
      "Game time is up or the player finishes early, then this event is sent"
    ),
    scores: z4.number().nonnegative().int()
  })
]).and(
  z4.object({
    version: z4.literal(1).describe(
      "this is to make sure our code knows how to handle if schema updated"
    )
  })
);
var game4 = {
  id: "CIMU_SURGE_RUN",
  url: "https://stream-run.342games.com",
  name: "Surge Run",
  shortDescription: "TBU",
  message: message4,
  // will be sanitized
  descriptionInHtml: "TBU",
  launchInstructionInHtml: "TBU",
  scoringRulesInHtml: "TBU"
};

// src/tumble-fall.ts
var tumble_fall_exports = {};
__export(tumble_fall_exports, {
  game: () => game5,
  gameParams: () => gameParams5,
  message: () => message5
});
import { z as z5 } from "zod";
var gameParams5 = z5.object({
  level: z5.number().nonnegative().int().min(1).max(2).describe("game difficulty")
});
var message5 = z5.discriminatedUnion("kind", [
  z5.object({
    kind: z5.literal("[game]:initialized").describe(
      "Should be the first event in the sequence, tells Stream when to send initial params"
    )
  }),
  z5.object({
    kind: z5.literal("[host]:initial-params").describe("Setup game with game params, after initialised"),
    userId: z5.string().uuid("unique userId"),
    sessionId: z5.string().describe("unique for each game session"),
    gameDurationInSeconds: z5.number().nonnegative().int().describe("the duration of the game in seconds"),
    gameParams: gameParams5
  }),
  z5.object({
    kind: z5.literal("[game]:is-ready").describe(
      "Sent after the game has been fully setup include loading asset/logic/etc...In other words, ready to play"
    )
  }),
  z5.object({
    kind: z5.literal("[host]:start-game").describe(
      "Start the game immediately, there should be no delay time after this event is sent to let the players play the game"
    ),
    timeLeftInSeconds: z5.number().nonnegative().int().describe(
      "how many seconds left before the game will end, should be 0 <= timeLeft <= gameDurationInSeconds"
    )
  }),
  z5.object({
    kind: z5.literal("[game]:ended").describe(
      "Game time is up or the player finishes early, then this event is sent"
    ),
    scores: z5.number().nonnegative().int(),
    falls: z5.number().nonnegative().int(),
    elapsedTimeInSeconds: z5.number().nonnegative().int().describe(
      "Number of seconds elapsed since player stared the game until end or player finished it, should be 0 <= elapsed <= timeLeft"
    )
  })
]).and(
  z5.object({
    version: z5.literal(1).describe(
      "this is to make sure our code knows how to handle if schema updated"
    )
  })
);
var game5 = {
  id: "CIMU_TUMBLE_FALL",
  url: "https://stream-four.342games.com",
  name: "Tumble Fall",
  shortDescription: "Jump your way down to score points",
  message: message5,
  // will be sanitized
  descriptionInHtml: "Users will tumble their way different sized platforms to get the highest score possible. Size of platforms depends on difficulty level selected by creators.",
  launchInstructionInHtml: "Normal mode: Larger sized platforms\nHard mode: Smaller sized platforms",
  scoringRulesInHtml: "Fans are scored based on the number of successful jumps. Landing in the middle consecutively builds a streak. They get 250 base gems for passing and 500 bonus gems for making into Top 100."
};

// src/color-recall.ts
var color_recall_exports = {};
__export(color_recall_exports, {
  game: () => game6,
  gameParams: () => gameParams6,
  message: () => message6
});
import { z as z6 } from "zod";
var gameParams6 = z6.object({});
var message6 = z6.discriminatedUnion("kind", [
  z6.object({
    kind: z6.literal("[game]:initialized").describe(
      "Should be the first event in the sequence, tells Stream when to send initial params"
    )
  }),
  z6.object({
    kind: z6.literal("[host]:initial-params").describe("Setup game with game params, after initialised"),
    userId: z6.string().uuid("unique userId"),
    sessionId: z6.string().describe("unique for each game session"),
    gameDurationInSeconds: z6.number().nonnegative().int().describe("the duration of the game in seconds"),
    gameParams: gameParams6
  }),
  z6.object({
    kind: z6.literal("[game]:is-ready").describe(
      "Sent after the game has been fully setup include loading asset/logic/etc...In other words, ready to play"
    )
  }),
  z6.object({
    kind: z6.literal("[host]:start-game").describe(
      "Start the game immediately, there should be no delay time after this event is sent to let the players play the game"
    ),
    timeLeftInSeconds: z6.number().nonnegative().int().describe(
      "how many seconds left before the game will end, should be 0 <= timeLeft <= gameDurationInSeconds"
    )
  }),
  z6.object({
    kind: z6.literal("[game]:ended").describe(
      "Game time is up or the player finishes early, then this event is sent"
    ),
    rounds: z6.number().nonnegative().int(),
    scores: z6.number().nonnegative().int(),
    elapsedTimeInSeconds: z6.number().nonnegative().int().describe(
      "Number of seconds elapsed since player stared the game until end or player finished it, should be 0 <= elapsed <= timeLeft"
    )
  })
]).and(
  z6.object({
    version: z6.literal(1).describe(
      "this is to make sure our code knows how to handle if schema updated"
    )
  })
);
var game6 = {
  id: "CIMU_COLOR_RECALL",
  url: "https://stream-five.342games.com",
  name: "Color Recall",
  shortDescription: "Recall the positions of the colored dots\xA0",
  message: message6,
  // will be sanitized
  descriptionInHtml: "Users will have 3 rounds where they will be shown 4 different pair of color dots. The goal is to try and recall the positions of these dots as accurately as possible for the highest score.",
  launchInstructionInHtml: "Select the duration of the StreamDrop",
  scoringRulesInHtml: "Fans are scored based on the proximity of their guesses to the actual answer. They get 250 base games for passing and 500 bonus gems for making into Top 100."
};

// src/common.ts
var thirdPartyExperience = z7.enum([
  game.id,
  game2.id,
  game3.id,
  game4.id,
  game5.id,
  game6.id
  // add more games here
]);
export {
  card_dash_exports as cardDash,
  color_recall_exports as colorRecall,
  mathcraft_exports as mathCraft,
  matrix_run_exports as matrixRun,
  surge_run_exports as surgeRun,
  thirdPartyExperience,
  tumble_fall_exports as tumbleFall
};
