"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = _default;
exports.isValidDataFile = isValidDataFile;
exports.parseList = parseList;
exports.parseMap = parseMap;
exports.parseValue = parseValue;
exports.transformJSONtoSass = transformJSONtoSass;

var _isPlainObject = require("is-plain-object");

var _fs = require("fs");

var _path = _interopRequireWildcard(require("path"));

var _jsYaml = _interopRequireDefault(require("js-yaml"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _default(url, prev) {
  if (!isValidDataFile(url)) {
    return null;
  }

  let includePaths = this.options.includePaths
    ? this.options.includePaths.split(_path.default.delimiter)
    : [];
  let paths = [].concat((0, _path.dirname)(prev)).concat(includePaths);
  let file = paths
    .map((path) => (0, _path.resolve)(path, url))
    .filter(_fs.existsSync)
    .pop();

  if (!file) {
    return new Error(
      `Unable to find "${url}" from the following path(s): ${paths.join(
        ", "
      )}. Check includePaths.`
    );
  }

  try {
    return {
      contents: transformJSONtoSass(
        _jsYaml.default.load(
          (0, _fs.readFileSync)(require.resolve(file), "utf8").replace(
            /\b \b/g,
            "_"
          )
        )
      ),
    };
  } catch (e) {
    return new Error(
      `node-sass-yaml-importer: Error transforming YAML to SASS. Check if your YAML parses correctly. ${e}`
    );
  }
}

function isValidDataFile(url) {
  return /\.(ya?ml|json)$/.test(url);
}

function transformJSONtoSass(json) {
  return Object.keys(json)
    .map((key) => `$${key}: ${parseValue(json[key])};`)
    .join("\n");
}

let hexPattern = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
let unquotedStringPattern = /^(-?([a-z_]|[^ -~])|--)([a-z0-9_-]|[^ -~])*$/i;
let quotedStringPattern = /^("([^"\\]|\\.)*"|'([^'\\]|\\.)*')$/gsu;

function parseValue(value) {
  if (Array.isArray(value)) {
    return parseList(value);
  } else if ((0, _isPlainObject.isPlainObject)(value)) {
    return parseMap(value);
  } else if (
    typeof value === "string" &&
    (hexPattern.test(value) ||
      unquotedStringPattern.test(value) ||
      quotedStringPattern.test(value))
  ) {
    return value;
  } else {
    return JSON.stringify(value);
  }
}

function parseList(list) {
  return `(${list.map((value) => `${parseValue(value)},`).join("")})`;
}

function parseMap(map) {
  return `(${Object.keys(map)
    .map((key) => `'${key.replace(/'/g, "\\'")}': ${parseValue(map[key])},`)
    .join("")})`;
} // Super-hacky: Override Babel's transpiled export to provide both
// a default CommonJS export and named exports.
// Fixes: https://github.com/Updater/node-sass-json-importer/issues/32
// TODO: Remove in 3.0.0. Upgrade to Babel6.

module.exports = exports.default;
Object.keys(exports).forEach((key) => (module.exports[key] = exports[key]));
