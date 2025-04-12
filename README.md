# 🛤️ CodeTransEngine

**🚨 News (2025-03-5):** Our system paper [*CodeTransEngine: Ready-to-Use Backend for LLM-Based Code Translation*](https://openreview.net/pdf?id=9WHJuzjPJf) has been accepted to the [ICLR 2025 Third Workshop on Deep Learning for Code](https://dl4c.github.io/)

**🚨 News (2025-01-21):** We're excited to share that our paper [*InterTrans: Leveraging Transitive Intermediate Translations to Enhance LLM-based Code Translation*](https://arxiv.org/abs/2411.01063) has been accepted to the Main Research Track of the [47th IEEE/ACM International Conference on Software Engineering (ICSE 2025)](https://conf.researchr.org/home/icse-2025)

## Welcome

Welcome to the documentation for CodeTransEngine. This is a **ready-to-use backend** for Large Language Model (LLM) based code translation across programming languages. This tool enables practitioners to translate source code across programming languages at scale, by leveraging off-the-shelf Large Language Models (LLM). This backend integrates the Tree of Code Translation (ToCT) algorithm used in the InterTrans Paper can be used with few-shot prompting, agents or newer algorithms.

## 🌟 Why use CodeTransEngine?

CodeTransEngine serves as a **backend** for code translation, helping you save time and effort in building such infrastructure from scratch. It is **extensible** and **high-performant** due to its concurrent architecture and other optimizations. 

### Features
- 🧠 Multiple algorithms (InterTrans, Direct Translation, Few-shot Prompting and more)
- ⚡ Efficient inference using vLLM as backend and OpenAI Compatible APIs
- 🌐 Distributed inference supported
- 🛡️ Safe and containerized code execution
- 📊 Automatic translation evaluation using test-cases
- 🔧 Extensible to new datasets, prompts and translation algorithms 
- ♻️ Configurable cache for resource saving
- 🚆 Fully concurrent architecture for maximum throughput or sequential for resource saving 
- 🔗 Can be used standalone or integrated into existing workflows for code translation

## Installation and Quickstart

Please see the [Documentation Page](https://codetransengine.github.io/guides/)

## Citation
If you use this tool for academic purposes, please considering citing our system paper:

```bibtex
@inproceedings{macedo2025codetransengine,
  title={CodeTransEngine: Ready-to-use Backend for LLM-based Code Translation},
  author={Macedo, Marcos and Tian, Yuan and Adams, Bram},
  booktitle={ICLR 2025 Third Workshop on Deep Learning for Code}
}
```

## License of the Repository
The contents of this repository are licensed under the MIT License. For detailed information, please refer to the LICENSE.md file.
