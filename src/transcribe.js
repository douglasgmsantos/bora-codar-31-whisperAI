import { pipeline, env } from "@xenova/transformers";
import { loadingMessage } from "./loading";
// Disable local models
env.allowLocalModels = false;

// import data from "./data.json";
let data = null;

export async function transcribeAudio() {
  const options = {
    chunk_length_s: 30,
    stride_length_s: 5,
    language: "portuguese",
    task: "transcribe",
    return_timestamps: true,
    force_full_sequences: false,
  };

  try {
    console.log(env);
    console.time();
    loadingMessage(
      "Iniciando a transcrição de áudio, essa etapa é demorada... aguarde"
    );
    console.log("[START_TRANCRIBE]");

    const transcriber = await pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-tiny"
    );
    data = await transcriber("../audio.mp3", options);
  } catch (error) {
    console.log("[ERROR_TRANCRIBE]", error);
    throw new Error(error);
  } finally {
    console.timeEnd();
    console.log("[STOP_TRANCRIBE]", data);

    return data;
  }
}
