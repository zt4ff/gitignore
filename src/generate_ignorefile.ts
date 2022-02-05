import fs from "fs";
import fsPromise from "fs/promises";
import path from "path";

const generateIgnoreFile = (generalType: string, editorType?: string) => {
  fs.open(path.resolve(process.cwd(), ".gitignore"), "w", async (err, fd) => {
    if (err) throw new Error(err.message);

    const genConfig = await fsPromise.readFile(
      path.resolve(__dirname, "..", "general_type", `${generalType}.gitignore`)
    );
    fs.write(fd, genConfig, async (er1) => {
      if (er1) throw new Error(er1.message);
      if (editorType) {
        const editorConfig = await fsPromise.readFile(
          path.resolve(
            __dirname,
            "..",
            "editor_type",
            `${editorType}.gitignore`
          )
        );

        fs.writeFile(fd, editorConfig, (er2) => {
          if (er2) throw new Error(er2.message);
        });
      }

      fs.close(fd, (er) => {
        if (er) throw new Error(er.message);

        console.log("Gitignore file created successfully");
      });
    });
  });
};

export default generateIgnoreFile;
