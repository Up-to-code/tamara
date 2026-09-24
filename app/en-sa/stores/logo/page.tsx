import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-logo-header.html';
import body from '@/components/exact/en-sa-stores-logo-body.html';
import footer from '@/components/exact/en-sa-stores-logo-footer.html';
import inline from '@/components/exact/en-sa-stores-logo.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
