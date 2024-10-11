const { spawnSync } = require('child_process');
const fs = require('fs');

// 创建 dist 文件夹
try {
  fs.mkdirSync('docs/.vitepress/dist', { recursive: true });
  console.log('dist 文件夹已创建');
} catch (err) {
  console.error(err);
}

// 设置工作目录
const options = {
  cwd: './docs/.vitepress/dist',
  encoding: 'utf8'
};

console.log('before：执行 git 指令 ----------------------');

const { stdout1, stderr1 } = spawnSync('git', ['init'], options);
console.log('完成：', stdout1 || stderr1 || 'finished');

const { stdout2, stderr2 } = spawnSync('git', ['remote', 'add', 'origin', 'https://github.com/wanghtGit/mx-ui-docs.git'], options);
console.log('完成：', stdout2 || stderr2 || 'finished');

const { stdout3, stderr3 } = spawnSync('git', ['fetch', 'origin', 'docs-auto:docs-auto'], options);
console.log('完成：', stdout3 || stderr3 || 'finished');

const { stdout4, stderr4 } = spawnSync('git', ['checkout', 'docs-auto'], options);
console.log('完成：', stdout4 || stderr4 || 'finished');

const { stdout5, stderr5 } = spawnSync('git', ['pull'], options);
console.log('完成：', stdout5 || stderr5 || 'finished');

console.log('before：git 指令执行完成 ----------------------');
