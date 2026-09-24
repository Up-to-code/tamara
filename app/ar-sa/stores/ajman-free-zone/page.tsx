import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-stores-ajman-free-zone-header.html';
import body from '@/components/exact/ar-sa-stores-ajman-free-zone-body.html';
import footer from '@/components/exact/ar-sa-stores-ajman-free-zone-footer.html';
import inline from '@/components/exact/ar-sa-stores-ajman-free-zone.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
