// Copyright (c) 2025 Yoni Tjio
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { defineConfig } from "vite";

export default {
    base: "/owly",
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: [
                    "mixed-decls",
                    "color-functions",
                    "global-builtin",
                    "import",
                ],
            },
        },
    },
};
