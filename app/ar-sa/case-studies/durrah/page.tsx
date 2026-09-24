import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-case-studies-durrah-header.html';
import body from '@/components/exact/ar-sa-case-studies-durrah-body.html';
import footer from '@/components/exact/ar-sa-case-studies-durrah-footer.html';
import inline from '@/components/exact/ar-sa-case-studies-durrah.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
