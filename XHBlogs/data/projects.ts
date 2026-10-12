// 🛡️ 本文件由控制台自动生成，请勿手动修改

export type Project = {
  id: string;
  name: string;
  description: string;
  icon: string;
  githubUrl: string;
  tags: string[];
};

export const projectsData: Project[] = [
  {
    "id": "svc_chat",
    "name": "Grok 聊天",
    "githubUrl": "https://chat.110549.xyz",
    "description": "自建的 Grok 网页聊天前端，聊天记录云端保存，支持生图、生视频。",
    "icon": "💬",
    "tags": ["AI", "自托管"]
  },
  {
    "id": "svc_ai",
    "name": "AI 群聊",
    "githubUrl": "https://ai.110549.xyz",
    "description": "多个 AI 一起聊天的群聊前端。",
    "icon": "🤖",
    "tags": ["AI", "自托管"]
  },
  {
    "id": "svc_cpa",
    "name": "CPA 中转站",
    "githubUrl": "https://cpa.110549.xyz",
    "description": "自用的 AI API 中转服务（CLIProxyAPI），给 Codex、龙虾们供血。",
    "icon": "🔌",
    "tags": ["API", "自托管"]
  },
  {
    "id": "svc_sub2api",
    "name": "sub2api",
    "githubUrl": "https://api.110549.xyz",
    "description": "另一套 API 中转与生图服务。",
    "icon": "🎨",
    "tags": ["API", "生图"]
  },
  {
    "id": "svc_panel",
    "name": "1Panel 服务器面板",
    "githubUrl": "https://panel.110549.xyz",
    "description": "VPS 的管理面板，服务器上的一切都从这里看。",
    "icon": "🖥️",
    "tags": ["运维"]
  }
];
