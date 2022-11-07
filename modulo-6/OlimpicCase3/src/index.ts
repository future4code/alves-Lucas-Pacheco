import app from "./app";
import { competitionRouter } from "./Router/CompetitionRouter";




app.use("/competition", competitionRouter)