// exec() 异步执行，spawnSync() 同步执行
const { spawnSync, exec } = require('child_process');

// 设置工作目录
const options = {
  cwd: './docs/.vitepress/dist',
  encoding: 'utf8'
};


// exec('git status', options, (error, stdout, stderr) => {
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


console.log('after：执行 git 指令 ----------------------');

const { stdout1, stderr1 } = spawnSync('git', ['add', '.'], options);
console.log('完成：', stdout1 || stderr1 || 'finished');

const { stdout2, stderr2 } = spawnSync('git', ['commit', '-m', '更新文档打包的静态文件'], options);
console.log('完成：', stdout2 || stderr2 || 'finished');

const { stdout3, stderr3 } = spawnSync('git', ['push', 'origin', 'docs-auto'], options);
console.log('完成：', stdout3 || stderr3 || 'finished');

console.log('after：git 指令执行完成 ----------------------');
