// // webpack.config.js

// module.exports = {
//     // ... other webpack configurations
  
//     module: {
//       rules: [
//         {
//           test: /\.module\.scss$/,
//           use: [
//             'style-loader', // or MiniCssExtractPlugin.loader
//             {
//               loader: 'css-loader',
//               options: {
//                 modules: true,
//                 localIdentName: '[name]__[local]___[hash:base64:5]', // optional
//               },
//             },
//             'sass-loader',
//           ],
//         },
//         // ... other webpack rules
//       ],
//     },
//   };
  