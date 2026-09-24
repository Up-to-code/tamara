import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-blog-post-the-ramadan-2026-playbook-turn-business-insights-into-revenue-header.html';
import body from '@/components/exact/ar-sa-blog-post-the-ramadan-2026-playbook-turn-business-insights-into-revenue-body.html';
import footer from '@/components/exact/ar-sa-blog-post-the-ramadan-2026-playbook-turn-business-insights-into-revenue-footer.html';
import inline from '@/components/exact/ar-sa-blog-post-the-ramadan-2026-playbook-turn-business-insights-into-revenue.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
