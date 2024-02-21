function compile() {
    const html = document.getElementById("html").value;
    const css = document.getElementById("css").value;
    const js = document.getElementById("js").value;
    const code = document.getElementById("code").contentWindow.document;

    document.body.addEventListener("input", function() {
        code.open();
        code.writeln(`${html}<style>${css}</style><script>${js}</script>`);
        code.close();
    });
}

compile();
