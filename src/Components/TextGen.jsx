"use client";
import { TextGenerator} from "../Containers/TextGenrator";



export default function TextGen({words}) {
  return <TextGenerator words={words} duration={0.5} />;
}
