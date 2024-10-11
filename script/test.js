const { spawnSync, exec } = require('child_process');

const fs = require('fs');

// // 同步创建新文件夹
// try {
//   fs.mkdirSync('docs/.vitepress/dist', { recursive: true });
//   console.log('dist 文件夹已创建');
// } catch (err) {
//   console.error(err);
// }

// 创建 dist 文件夹
// console.log('创建 dist 目录')
// const { stdout, stderr } = spawnSync('mkdir', ['dist'], { cwd: './docs/.vitepress' });
// console.log(stdout || stderr || 'finished');

// exec('mkdir dist', { cwd: './docs/.vitepress', encoding: 'utf8' }, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`执行出错 --- : ${error}`);
//     return;
//   }

//   if (stderr) {
//     console.error(`错误信息 --- : ${stderr}`);
//     // return;
//   }

//   console.log(`输出 --- : ${stdout}`);
// })