import { HttpInterceptorFn } from '@angular/common/http';

const REALWORLD_API = 'https://api.realworld.show/api';

const API_ROUTES: Record<string, string> = {
  '/func-a': 'https://localhost:7259/api',
  '/func-b': 'https://localhost:7260/api',
  '/func-c': 'https://localhost:7261/api',
};

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  // 已经是完整 URL（CDN / 外部资源）
  if (req.url.startsWith('http')) {
    return next(req);
  }

  // 👉 本地多 API 路由
  for (const prefix in API_ROUTES) {
    if (req.url.startsWith(prefix)) {
      const apiReq = req.clone({
        url: `${API_ROUTES[prefix]}${req.url.replace(prefix, '')}`
      });
      return next(apiReq);
    }
  }

  // 👉 默认：RealWorld 官方 API
  const apiReq = req.clone({
    url: `${REALWORLD_API}${req.url}`
  });

  return next(apiReq);
};

